import { useEffect, useState } from "react";
import Axios from "../../../axiosBaseUrl"
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import "./ForgotPassword.css"
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const ForgotPassword = () => {

  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const onChangeHandler = (e) => {
      setEmail(e.target.value)
  };

  const sumbitHandler = async (e) => {
     setLoading(true)
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await Axios.post(
        "/auth/forgotpassword",
        { email },
        config
      );
  
      setSuccess(data.data);
      setLoading(false)
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false)
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="forgot-page" style={{marginTop: "64px"}}>
      <Container component="main" maxWidth="xs">
       
        <form onSubmit={sumbitHandler}>
          <p style={{ color: "red", padding: "1rem 2rem" }}>{error}</p>
          { success &&  <p style={{ color: "white", background: "green", padding: "1rem 2rem" }}>
            {success}
          </p>}
          <Typography component="h1" variant="h5">
            Forgot Password?
          </Typography>
          <p className="mb-2 text-muted">
            Enter your registered email ID to reset the password
          </p>
          <TextField
            margin="normal"
            required
            fullWidth
            onChange={onChangeHandler}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
         {loading ? <BeatLoader color="white" /> :   "Reset Password" }
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
