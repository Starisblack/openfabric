import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import PasswordInput from "../../../components/PasswordInput";
import { useEffect} from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { authToken, clearError, error, loading, setError, signUpAsync } from "../../../reducers/authReducers";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();

  const token = useSelector(authToken);
  const errorMsg = useSelector(error);
  const dispatch = useDispatch();
  const status = useSelector(loading);

  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, [navigate, token]);

  const { handleSubmit, register, reset } = useForm();

  const onSubmitHandler = async (userInput) => {
    if (userInput.password !== userInput.confirmPassword) {
      setTimeout(() => {
       dispatch(clearError())
      }, 3000);
      return dispatch(setError("Password do not match"))
    }

      dispatch(signUpAsync())
      reset();
  };

  return (
    <div className="signUp-page">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
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
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <PasswordInput
              label="Password"
              register={{ ...register("password") }}
            />
            <PasswordInput
              label="Confirm Password"
              register={{ ...register("confirmPassword") }}
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
        </Box>
      </Container>
    </div>
  );
};

export default SignUp;
