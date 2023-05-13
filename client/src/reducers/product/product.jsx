import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
  quantity: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
       state.products = action.payload
    },
    addQuantity: (state) => {
      state.quantity = state.quantity + 1;
    },

    removeQuantity: (state) => {
      state.quantity = state.quantity - 1;
    },

    addToCart: (state, action) => {
      const itemsInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (action.payload.quantity >= 1) {
        if (itemsInCart?.quantity !== undefined) {
          itemsInCart.quantity = itemsInCart.quantity + action.payload.quantity;
        }   else {state.cart.push({ ...action.payload})}
      } else if (itemsInCart) {
        itemsInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
        const itemsInCart = state.cart.filter(item => item._id !== action.payload._id)
       
        state.cart = itemsInCart

    }
  },
});

export const { addQuantity, removeQuantity, addToCart, removeFromCart, setProducts } = productSlice.actions;

export const quantity = (state) => state.product.quantity;
export const cart = (state) => state.product.cart;
export const products = state => state.product.products


export default productSlice.reducer;
