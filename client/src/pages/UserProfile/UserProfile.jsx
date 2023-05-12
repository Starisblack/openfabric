import { Button, InputAdornment, TextField } from "@mui/material";
import "./UserProfile.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import FormDialog from "../../components/popUpForm";
import EditProfile from "./EditProfile/EditProfile";
const UserProfile = () => {
  const { handleSubmit, register } = useForm();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [diableInput, setDiableInput] = useState(true);

  const onSubmitHandler = async (data) => {
    console.log(data);
  };

  const profileDetails = [
    {
      type: "text",
      title: "Name",
      data: name,
      required: false,
    },

    {
      type: "email",
      title: "Email",
      required: true,
    },

    {
      type: "number",
      title: "Phone",
      required: false,
    },

    {
      type: "text",
      title: "Address",
      required: false,
    },
  ];

  const handleClose = () => {
    setShowUpdateForm(false)
  }

  return (
    <div className="profile-page">

    <FormDialog open={showUpdateForm} >
      <EditProfile handleClose={handleClose}/>
    </FormDialog>
      <section className="h-100 gradient-custom-2">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-3  col-xl-5">
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
                  <form onSubmit={handleSubmit(onSubmitHandler)}>
                    {profileDetails.map((detail) => {
                      return (
                        <TextField
                          key={detail.title}
                          {...register(detail.title.toLowerCase())}
                          type={detail.type}
                          fullWidth
                          margin="normal"
                          defaultValue={detail.data}
                          required={detail.required}
                          disabled={diableInput}
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


                    {/* {showUpdateBtn && (
                      <div className="updateBtn-container mt-2">
                        <Button
                          onClick={() => {
                            setShowUpdateBtn(false);
                            setDiableInput(true);
                          }}
                          color="error"
                          variant="contained"
                        >
                          Cancel
                        </Button>

                        <Button
                          color="success"
                          variant="contained"
                          type="submit"
                        >
                          {loading ? <BeatLoader /> : "Update"}
                        </Button>
                      </div>
                    )} */}
                  </form>

              
                    <div className="d-flex justify-content-center mb-2 gap-2">
                      <Button
                        onClick={() => {
                          setShowUpdateForm(true);
                          setDiableInput(false);
                        }}
                        variant="contained"
                      >
                        Edit Profile
                      </Button>

                      <Button
                        variant="contained"
                        color="error"
                        // onClick={openHandler}
                      >
                        Delete Account
                      </Button>
                    </div>
                 
                </div>
              </div>
            </div>
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div className="card-body p-4 text-black">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Your Products</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
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
