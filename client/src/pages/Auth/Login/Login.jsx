import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import PasswordInput from "../../../components/PasswordInput";
import { useForm } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector, useDispatch } from "react-redux";
import {
  authToken,
  clearError,
  error,
  loading,
  loginAsync,
} from "../../../reducers/auth/authReducers";
import { useEffect } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const Login = () => {
  let navigate = useNavigate();

  const token = useSelector(authToken);
  const errorMsg = useSelector(error);
  const dispatch = useDispatch();
  const status = useSelector(loading);

  // login schema for validation
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Enter a valid email"),
    password: yup.string().required("Enter your Password"),
 })

 const {
  handleSubmit,
  register,
  reset,
  formState: { errors },
} = useForm({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
    if (errorMsg) {
      setTimeout(() => {
        dispatch(clearError());
      }, 3000);
    }
  }, [dispatch, errorMsg, navigate, token]);

  const sumbitHandler = (userInput) => {
    dispatch(loginAsync(userInput));
    reset()
  };

  return (
    <div className="page login-page">
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
            Sign in
          </Typography>

          <form onSubmit={handleSubmit(sumbitHandler)}>
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
            <Grid item xs={12} md={12}>
              <Link to="/forgotpassword" className="text-start">
                Forgot password?
              </Link>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
            >
              {status ? <BeatLoader color="white" /> : "Sign In"}
            </Button>
            <p style={{ color: "red" }}>{errorMsg}</p>

            <Grid container>
              <Grid item>
                <p style={{ color: "black" }}>
                  Don&apos;t have an account?{" "}
                  <Link to="/auth/signup">Sign Up</Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
