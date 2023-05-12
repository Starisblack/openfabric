const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
// const sendEmail = require ("../utils/sendEmail")
const jwt = require("jsonwebtoken");



exports.logout = (req, res) => {
  req.logout();
  res.redirect("http://127.0.0.1:5173");
};


exports.register = async (req, res, next) => {
  const {email, password } = req.body;

  try {
    const user = await User.create({
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("please provide email and password", 400));
  }

  User.findOne({ email: email })
    .select("+password")
    .then((user) => {
      if (!user) {
        return next(new ErrorResponse("invalid credentials", 401));
      }

      user.matchPasswords(password).then((isMatch) => {
        if (!isMatch) {
          return next(new ErrorResponse("invalid credentials", 401));
        } else {
          sendToken(user, 201, res);
        }
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404));
    }

    const resetToken = user.getResetPasswordToken();
    user.save();

    const resetEmailUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    const message = `
           <h1>You have requested a password reset</h1>
           <p>Please go to this link to reset your password</p>
           <a href=${resetEmailUrl} clicktracking=off> ${resetEmailUrl}</a>
        `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset",
        text: message,
      });

      res.status(200).json({
        success: true,
        data: "Email Sent",
      });
    } catch (error) {
      (user.resetpassword = undefined), (user.passwordExpire = undefined);

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (error) {
    next(error);
  }
};

exports.updateAccount = async (req, res, next) => {
  const { id, fullName, phone, address } = req.body; 

  try {
    await User.findByIdAndUpdate(id, { fullName, phone, address });
    res.status(201).json({
      success: true,
      message: "Account Details Updated",
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAccount = async (req, res, next) => {
  const { id } = req.body;

  try {
    await User.findByIdAndRemove(id);
    res.status(201).json({
      success: true,
      message: "Account deleted",
    });
  } catch (error) {
    next(error);
  }
};



exports.resetpassword = async (req, res, next) => {
  const resetToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken: resetToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    console.log({ user: user });
    if (!user) {
      return next(new ErrorResponse("Invalid Reset Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "password reset success",
    });
  } catch (error) {
    next(error);
  }
};

const getSignedToken = function (id) {
 
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const sendToken = (user, statusCode, res) => {
  const token = getSignedToken(user._id);
  
  res
    .status(statusCode)
    .json({ success: true, token});
};
