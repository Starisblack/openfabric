import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import SocialMediaLogin from "../../../components/SocialMediaLogin/SocialMediaLogin";
import { useForm } from "react-hook-form";
import "./SignUp.css";
// import { useDispatch } from "react-redux";
// import { signUpAsync } from "../store/reducers/authReducers";
import PasswordInput from "../../../components/PasswordInput";
import { auth, provider } from "../../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Axios from "../../../axiosBaseUrl";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const SignUp = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const { handleSubmit, register } = useForm();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then(async (res) => {
      const user = res.user;

      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await Axios.post(
        "/auth/google",
        { googleId: user.uid, name: user.displayName, email: user.email },
        config
      );
      localStorage.setItem("token", data.token);

      navigate("/profile");
    });
  };

  const onSubmitHandler = async (userInput) => {
    setLoading(true);
    if (userInput.password !== userInput.confirmPassword) {
      setTimeout(() => {
        setError("");
      }, 3000);
      setLoading(false);
      return setError("Password do not match");
    }

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const {email, password } = userInput;

      const { data } = await Axios.post(
        "/auth/register",
        {email, password },
        config
      );
      localStorage.setItem("token", data.token);
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
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
          <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
          <Grid item xs={12} md={12}>
            <SocialMediaLogin tag="Up" google={signInWithGoogle} />
          </Grid>
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

            <PasswordInput register={{ ...register("password") }} />
            <PasswordInput register={{ ...register("confirmPassword") }} />

            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <BeatLoader color="white" /> : "Sign Up"}
            </Button>
            <Grid container>
              <Grid item>
                <p>
                  Already have an account? <Link to="/login">Sign In</Link>
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
