import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import Axios from "../../../axiosBaseUrl";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToken, user } from "../../../reducers/auth/authReducers";
import BeatLoader from "react-spinners/BeatLoader";
import { getAllProductsAsync } from "../../../reducers/product/product";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddProduct = () => {
  const navigate = useNavigate();
  const token = useSelector(authToken);
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
    window.scrollTo(0, 0);
  }, [navigate, token]);

  // product schema for validation

  const productSchema = yup.object().shape({
    title: yup.string().required("Enter Product Title"),
    price: yup.number() .typeError("Number Only").positive("Negative number not allowed").required("Enter Product Price"),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });

  const sumbitHandler = async (userInput) => {
    setLoading(true);

    const { title, description, price } = userInput;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await Axios.post(
        "/product/create",
        { createdBy: userData._id, title, description, price },
        config
      );
      setLoading(false);
      dispatch(getAllProductsAsync());
      navigate("/product/" + data.product._id);
      reset();
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  };

  return (
    <div className="page add-product-container">
      <h1>Add Your Product</h1>
      <form onSubmit={handleSubmit(sumbitHandler)}>
        <TextField
          {...register("title")}
          margin="normal"
          fullWidth
          label="Product Title"
          error={!!errors.title}
          helperText={errors.title && errors?.title?.message}
        />

        <FormControl fullWidth margin="normal" error={!!errors.price}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            {...register("price")}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
          <FormHelperText>
                {errors.price && errors?.price?.message}
              </FormHelperText>
        </FormControl>

        <TextField
          {...register("description")}
          margin="normal"
          fullWidth
          multiline
          rows={4}
          label="Description"
        />
        {/* <div className="text-start mt-2">
          <label className="form-label">Product Picture</label>
          <input type="file" className="form-control" id="customFile" />
        </div> */}

        <button type="submit" className="btn btn-dark btn-lg block mt-3">
          {loading ? <BeatLoader /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
