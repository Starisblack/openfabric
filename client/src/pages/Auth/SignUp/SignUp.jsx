import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import PasswordInput from "../../../components/PasswordInput";
import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import {
  authToken,
  clearError,
  error,
  loading,
  setError,
  signUpAsync,
} from "../../../reducers/auth/authReducers";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUp = () => {
  const navigate = useNavigate();

  const token = useSelector(authToken);
  const errorMsg = useSelector(error);
  const dispatch = useDispatch();
  const status = useSelector(loading);

  // register schema for validation
  const registerSchema = yup.object().shape({
    email: yup.string().email().required("Enter a valid email"),
    password: yup.string().min(6, 'Must be at least 6 characters long').required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password don't match").required()

 })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });


  useEffect(() => {
    if (token) {
      navigate("/profile");
      reset()
    } else {
      dispatch(clearError())
    }
  }, [dispatch, navigate, reset, token]);



 
  const onSubmitHandler = async (userInput) => {

    console.log(userInput)
    if (userInput.password !== userInput.confirmPassword) {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      return dispatch(setError("Password do not match"));
    }

    dispatch(signUpAsync(userInput));
  };

  return (
    <div className="page signUp-page">
      <Container component="main" maxWidth="xs">
        <div
          style={{
            arginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <TextField
              {...register("email")}
              margin="normal"
              fullWidth
              label="Email Address"
              error={!!errors.email}
              helperText={errors.email && errors?.email?.message}
            />

            <PasswordInput
              label="Password"
              register={{ ...register("password") }}
              error={errors.password && errors?.password?.message}
              errorBorder={!!errors.password}
            />
            <PasswordInput
              label="Confirm Password"
              register={{ ...register("confirmPassword") }}
              error={errors.confirmPassword && errors?.confirmPassword?.message}
              errorBorder={!!errors.confirmPassword}
            />
            <p style={{ color: "red", marginTop: "15px" }}>{errorMsg}</p>
            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {status ? <BeatLoader color="white" /> : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item>
                <p>
                  Already have an account? <Link to="/auth/login">Sign In</Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
