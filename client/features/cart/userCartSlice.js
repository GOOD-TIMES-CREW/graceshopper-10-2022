import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartProducts: [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

export const addToUserCart = createAsyncThunk(
  "cart/add",
  async ({ productId, userId, totalQuantity }) => {
    try {
      const { data } = await axios.put(`api/users/${userId}/cart`, {
        productId,
        totalQuantity,
      });
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }
);

export const removeFromUserCart = createAsyncThunk(
  "cart/remove",
  async ({ productId, userId, quantityRemoved, totalQuantity }) => {
    const { data } = await axios.delete(`/api/users/${userId}/cart`, {
      productId,
      quantityRemoved,
      totalQuantity,
    });
    return data;
  }
);

const userCartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToUserCart.fulfilled, (state, action) => {
        const productIndex = state.cartProducts.findIndex(
          (product) => product.id === action.payload.id
        );
        if (productIndex >= 0) {
          state.cartProducts[productIndex].cartQuantity++;
        } else {
          const newProduct = { ...action.payload, cartQuantity: 1 };
          state.cartProducts.push(newProduct);
        }
      })
      .addCase(removeFromUserCart.fulfilled, (state, action) => {
        const productIndex = state.cartProducts.findIndex(
          (product) => product.id === action.payload.id
        );
        if (productIndex >= 0) {
          state.cartProducts[productIndex].cartQuantity--;
        } else {
          state.cartProducts.splice(productIndex, 1);
        }
      });
  },
});

export default userCartSlice.reducer;
