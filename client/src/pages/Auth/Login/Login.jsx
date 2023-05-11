import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import PasswordInput from "../../../components/PasswordInput";
import { useForm } from "react-hook-form";
import Axios from "../../../axiosBaseUrl";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
// import { useSelector, useDispatch } from "react-redux";
// import { loginAsync, error, resetError, authToken } from "../store/reducers/authReducers";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(()=>{
     
      
  }, [])


  const sumbitHandler = async (userInput) => {
    setLoading(true);
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { email, password } = userInput;
      const { data } = await Axios.post(
        "/auth/login",
        { email, password },
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
    <div className="login-page">
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
            Sign in
          </Typography>

         

          <form onSubmit={handleSubmit(sumbitHandler)}>
            <TextField
              {...register("email")}
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <PasswordInput register={{ ...register("password") }} />
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
              {loading ? <BeatLoader color="white" /> : "Sign In"}
            </Button>
            <p style={{ color: "red" }}>{error}</p>
             
            <Grid container>
              <Grid item>
                <p><span>Don&apos;t have an account?</span> <Link to="/signup">Sign Up</Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
