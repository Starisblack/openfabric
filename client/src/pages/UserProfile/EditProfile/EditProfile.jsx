import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
// import "./EditProfile.css";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import Axios from "../../../axiosBaseUrl";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ handleClose, data }) => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForm = async (userInput) => {
    setLoading(true);

    const { fullName, phone, address } = userInput;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await Axios.post(
        "/auth/update",
        { id: data._id, fullName, phone, address },
        config
      );
      setLoading(false);
      handleClose();
      window.location.reload(true);
    } catch (error) {
      console.log("Error Occurred");
      setLoading(false);
    }
  };
  return (
    <>
      <h2 className="edit-profile-container">Edit Your Profile</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register("fullName")}
          fullWidth
          margin="normal"
          id="outlined-required"
          label="Full Name"
          defaultValue={data?.fullName}
        />

        <TextField
          margin="normal"
          fullWidth
          id="outlined-required"
          label="Phone"
          {...register("phone")}
          defaultValue={data?.phone}
        />
        <TextField
          {...register("address")}
          margin="normal"
          fullWidth
          id="outlined-multiline-static"
          label="Your Address"
          defaultValue={data?.address}
        />

        <div
          className="groupBtn"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit">{loading ? <BeatLoader /> : "Update"}</Button>
        </div>
      </form>
    </>
  );
};
export default EditProfile;

EditProfile.propTypes = {
  handleClose: PropTypes.func,
  data: PropTypes.object,
};
