import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cart: [],
  quantity: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addQuantity: (state) => {
      state.quantity = state.quantity + 1
    },

    removeQuantity: (state) => {
      state.quantity = state.quantity - 1
    }
  },
});

export const {addQuantity, removeQuantity } = productSlice.actions;

export const quantity = state => state.product.quantity
export const cart = state => state.product.cart


export default productSlice.reducer;
