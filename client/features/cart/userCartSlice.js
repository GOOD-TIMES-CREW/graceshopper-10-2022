import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartProducts: [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

export const addToUserCart = createAsyncThunk(
  "cart/add",
  async ({ product, userId }) => {
    try {
      const cart = await axios.get(`api/users/${userId}/cart`);
      if (cart.data) {
        const { data } = await axios.put(`api/users/${userId}/cart`, product);
        return data;
      }
    } catch (err) {
      console.error(err.message);
    }
  }
);

const userCartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToUserCart.fulfilled, (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].cartQuantity++;
      } else {
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(newProduct);
      }
    });
  },
});

export default userCartSlice.reducer;
