import { useEffect, useState } from "react";
import Axios from "../../../axiosBaseUrl";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import PasswordInput from "../../../components/PasswordInput";
import "./ResetPassword.css";
import { useForm } from "react-hook-form";
import BeatLoader from "react-spinners/BeatLoader";
import { useSelector } from "react-redux";
import { authToken } from "../../../reducers/auth/authReducers";

const ResetPassword = () => {
  const navigate = useNavigate();

  const { token } = useParams();

  const { register, handleSubmit } = useForm();
  const auth = useSelector(authToken);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (auth) {
      navigate("/profile");
    }
  }, [auth, navigate]);

  const sumbitHandler = async (userInput) => {
    setLoading(true);
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (userInput.password !== userInput.confirmPassword) {
      setTimeout(() => {
        setError("");
      }, 3000);
      setLoading(false);
      return setError("Password do not match");
    }

    const password = userInput.password;

    try {
      const { data } = await Axios.put(
        `/auth/resetpassword/${token}`,
        { password },
        config
      );
      setLoading(false);
      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="reset-page" style={{ marginTop: "64px" }}>
      <Container component="main" maxWidth="xs">
        <form onSubmit={handleSubmit(sumbitHandler)}>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>

          <p
            style={{
              color: "red",
              textAlign: "center",
              padding: ".7rem 1.2rem",
            }}
          >
            {error && error}
          </p>
          {success && (
            <p
              style={{
                color: "white",
                background: "green",
                textAlign: "center",
                padding: ".7rem 1.2rem",
              }}
            >
              {success}{" "}
              <Link
                to="/auth/login"
                style={{
                  color: "white",
                  marginLeft: "5px",
                  fontWeight: "700",
                  textDecoration: "underline",
                }}
              >
                {" "}
                Login
              </Link>
            </p>
          )}

          <PasswordInput
            label="password"
            register={{ ...register("password") }}
          />
          <PasswordInput
            label="confirmPassword"
            register={{ ...register("confirmPassword") }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
          >
            {loading ? <BeatLoader color="white" /> : "Reset Password"}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default ResetPassword;
