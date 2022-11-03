import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartProducts: localStorage.getItem("cartProducts")
    ? JSON.parse(localStorage.getItem("cartProducts"))
    : [],
  cartTotalPrice: 0,
  cartTotalQuantity: 0,
};

export const getUserCart = createAsyncThunk(
  "userCart/get",
  async ({ userId }) => {
    try {
      const { data } = await axios.get(`api/users/${userId}/cart`);
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }
);
export const addToUserCart = createAsyncThunk(
  "userCart/add",
  async ({ productId, userId, totalQuantity }) => {
    try {
      const { data } = await axios.put(`api/users/${userId}/cart`, {
        data: {
          productId,
          totalQuantity,
        },
      });
      return data;
    } catch (err) {
      console.error(err.message);
    }
  }
);

export const removeFromUserCart = createAsyncThunk(
  "userCart/remove",
  async ({ productId, userId, quantityRemoved, totalQuantity }) => {
    const { data } = await axios.delete(`/api/users/${userId}/cart`, {
      data: {
        productId,
        quantityRemoved,
        totalQuantity,
      },
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
        console.log(state);
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
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.userCart = action.payload;
      });
  },
});

export default userCartSlice.reducer;
