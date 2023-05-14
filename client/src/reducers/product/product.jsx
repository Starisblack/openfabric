import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../axiosBaseUrl"


export const getAllProductsAsync = createAsyncThunk(
  "getProducts",
  async (_, {dispatch}) => {
    try {
      const { data } = await Axios.get("/product/all");
         dispatch(setProducts(data.products))
    } catch (error) {
     console.log(error)
    }
  }
);



const initialState = {
  products: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const itemsInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (action.payload.quantity >= 1) {
        if (itemsInCart?.quantity !== undefined) {
          itemsInCart.quantity = itemsInCart.quantity + action.payload.quantity;
        } else {
          state.cart.push({ ...action.payload });
        }
      } else if (itemsInCart) {
        itemsInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemsInCart = state.cart.filter(
        (item) => item._id !== action.payload._id
      );

      state.cart = itemsInCart;
    },

    extraReducers: (builder) => {
      builder
        .addCase(getAllProductsAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllProductsAsync.fulfilled, (state) => {
          state.loading = false;
        })
        .addCase(getAllProductsAsync.rejected, (state) => {
          state.loading = false;
        })}
  },
});

export const {
  addToCart,
  removeFromCart,
  setProducts,
} = productSlice.actions;

export const quantity = (state) => state.product.quantity;
export const cart = (state) => state.product.cart;
export const products = (state) => state.product.products;

export default productSlice.reducer;
