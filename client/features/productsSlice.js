import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const { data } = await axios.get("/api/product");
  return data;
});

export const addProduct = createAsyncThunk(
  "addProduct",
  async (name, image, description) => {
    const { data } = await axios.post("/api/product", name, image, description);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (productId) => {
    const { data } = await axios.delete(`/api/product/${productId}`);
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(addProduct.fulfilled, (state, action) => {
        state.push(action.payload);
      }),
      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        const newProduct = state.filter(
          (product) => product.id !== action.payload.id
        );
        return newProduct;
      });
  },
});

export default productsSlice.reducer;
