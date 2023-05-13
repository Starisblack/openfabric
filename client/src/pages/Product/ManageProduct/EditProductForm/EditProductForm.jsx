import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
// import "./EditProfile.css";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import Axios from "../../../../axiosBaseUrl";
import { useSelector } from "react-redux";
import { authToken } from "../../../../reducers/auth/authReducers";

const EditProductForm = ({ handleClose, data }) => {
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const token = useSelector(authToken)

  const handleForm = async (userInput) => {
    setLoading(true);

    const { title, description, price } = userInput;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try { 
      await Axios.put(
        "/product/update",
        { id: data._id, title, description, price },
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
      <h2 className="edit-product-container">Edit Your Product Details</h2>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register("title")}
          fullWidth
          margin="normal"
          label="title"
          defaultValue={data?.title}
        />

        <TextField
          type="number"
          {...register("price")}
          margin="normal"
          fullWidth
          label="Price"
          defaultValue={data?.price}
        />

        <TextField
          margin="normal"
          fullWidth
          multiline
          rows={4}
          label="Description"
          {...register("description")}
          defaultValue={data?.description}
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
export default EditProductForm;

EditProductForm.propTypes = {
  handleClose: PropTypes.func,
  data: PropTypes.object,
};
