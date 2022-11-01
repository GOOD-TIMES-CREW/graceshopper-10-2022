import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// o: you don't necessarily want to follow this structure for error handling in
//  in async thunks... more in our SM
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const { data } = await axios.get("/api/products");
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "fetchSingleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const addProduct = createAsyncThunk("addProduct", async (newProduct) => {
  const { data } = await axios.post("/api/products", newProduct);
  return data;
});

export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    }),
      builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    }),
      builder.addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      });
  },
});

export default productsSlice.reducer;
