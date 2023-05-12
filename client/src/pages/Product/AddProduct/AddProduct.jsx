import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import "./AddProduct.css";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { handleSubmit,  register } = useForm();

  const sumbitHandler = (userInput) => {
    console.log(userInput)
  };
  return (
    <div className="add-product-container">
      <h1>Add Your Product</h1>
      <form onSubmit={handleSubmit(sumbitHandler)}>
        <TextField
          {...register("name")}
          margin="normal"
          required
          fullWidth
          label="Product Name"
        />


        <FormControl fullWidth margin="normal" required>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            {...register("price")}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>

        
        <TextField
          {...register("description")}
          margin="normal"
          fullWidth
          multiline
          rows={4}
          label="Description"
        />
        <div className="text-start mt-2">
          <label className="form-label">Product Picture</label>
          <input type="file" className="form-control" id="customFile" />
        </div>

        <button type="submit" className="btn btn-dark btn-lg block mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
