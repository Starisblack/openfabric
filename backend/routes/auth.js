const express = require('express');
const router = express.Router();



const {logout, register, login, forgotpassword, resetpassword, updateAccount, deleteAccount} = require('../controllers/auth')

router.route("/logout").get(logout)
router.route("/register").post(register) 
router.route("/login").post(login) 
router.route("/forgotpassword").post(forgotpassword) 
router.route("/resetpassword/:resetToken").put(resetpassword) 
router.route("/update").post(updateAccount)
router.route("/delete").post(deleteAccount)
module.exports = router;