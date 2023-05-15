import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector, useDispatch } from "react-redux";
import { authToken, error, forgotPasswordAsync, loading, success } from "../../../reducers/auth/authReducers";

const ForgotPassword = () => {
  const auth = useSelector(authToken);
  const loadingStatus = useSelector(loading);
  const err = useSelector(error);
  const successMsg = useSelector(success)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(success)

  const [email, setEmail] = useState("");
  

  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }, [auth, navigate]);

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
     dispatch(forgotPasswordAsync(email))
  };

  return (
    <div className="forgot-page" style={{ marginTop: "64px" }}>
      <Container component="main" maxWidth="xs">
        <form onSubmit={sumbitHandler}>
          <p style={{ color: "red", padding: "1rem 2rem" }}>{err}</p>
          { successMsg &&  <p style={{ color: "white", background: "green", padding: "1rem 2rem" }}>
            {successMsg}
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
            label="Email Address"
            name="email"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
          >
            {loadingStatus ? <BeatLoader color="white" /> : "Reset Password"}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ForgotPassword;
