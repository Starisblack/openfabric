import { Button, InputAdornment, TextField } from "@mui/material";
import "./UserProfile.css";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import FormDialog from "../../components/popUpForm";
import EditProfile from "./EditProfile/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import {
  authToken,
  logout,
  setUser,
  user,
} from "../../reducers/auth/authReducers";
import { useNavigate } from "react-router-dom";
import Axios from "../../axiosBaseUrl";
import ConfirmationDialog from "../../components/ConfirmationDialog/ConfirmationDialog";
const UserProfile = () => {
  const navigate = useNavigate();
  const token = useSelector(authToken);
  const userData = useSelector(user);
  const dispatch = useDispatch();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }

    const fetchData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await Axios.get("/private", config);
        dispatch(setUser(data.user));
      } catch (error) {
        console.log("You are not authorized please login");
        navigate("/auth/login");
      }
    };

    fetchData();
  }, [dispatch, navigate, token]);

  if (!userData) return <Spinner />;

  const profileDetails = [
    {
      title: "Name",
      data: userData.fullName,
    },

    {
      title: "Email",
      data: userData.email,
    },

    {
      title: "Phone",
      data: userData.phone,
    },

    {
      title: "Address",
      data: userData.address,
    },
  ];

  const handleClose = () => {
    setShowUpdateForm(false);
  };

  const openAlertHandler = () => {
    setOpenAlert(true);
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };

  const yesHandler = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await Axios.post("/auth/delete", { id: userData._id }, config);
      dispatch(logout());
      setLoading(false);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page profile-page">
      <ConfirmationDialog
        title="Do you want to delete your account?"
        openAlert={openAlert}
        closeAlert={closeAlert}
        yesHandler={yesHandler}
        loading={loading}
      />

      <FormDialog open={showUpdateForm}>
        <EditProfile data={userData} handleClose={handleClose} />
      </FormDialog>
      <section className="h-100 gradient-custom-2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6  col-xl-5">
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-2 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                    alt="Generic placeholder image"
                    className="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5>Andy Horwitz</h5>
                  <p>New York</p>
                </div>
              </div>
              <div
                className="pt-6 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="card mb-4 user-details-card">
                  <form>
                    {profileDetails.map((detail) => {
                      return (
                        <TextField
                          key={detail.title}
                          fullWidth
                          margin="normal"
                          value={detail?.data}
                          required={detail.required}
                          disabled={true}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                {detail.title}:
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      );
                    })}
                  </form>

                  <div className="d-flex justify-content-center my-3 gap-2">
                    <Button
                      onClick={() => {
                        setShowUpdateForm(true);
                      }}
                      variant="contained"
                    >
                      Edit Profile
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={openAlertHandler}
                    >
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
