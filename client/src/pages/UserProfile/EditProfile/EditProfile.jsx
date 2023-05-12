import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
} from "@mui/material";
// import "./EditProfile.css";
import PropTypes from "prop-types";


const EditProfile = ({handleClose}) => {
  const { handleSubmit, register } = useForm();

  const handleForm = async () => {};
  return (
    <>
      <h2 className="edit-profile-container">Edit Your Profile</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register("fullName")}
          fullWidth
          margin="normal"
          required
          id="outlined-required"
          label="Service Name"
          defaultValue="Bobby Main"
        />

        <TextField
          margin="normal"
          fullWidth
          required
          id="outlined-required"
          label=""
          {...register("phone")}
          defaultValue="89899799"
        />
        <TextField
          {...register("address")}
          margin="normal"
          fullWidth
          id="outlined-multiline-static"
          label="Your Adreess"
          defaultValue="jnj ddbdhb ddhbdb"
        />

        <div
          className="groupBtn"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="button" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </>
  );
};
export default EditProfile;

EditProfile.propTypes ={
  handleClose: PropTypes.func,
}
