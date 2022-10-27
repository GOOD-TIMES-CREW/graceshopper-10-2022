import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// export const addProduct = createAsyncThunk(
//   "addProduct",
//   async (name, image, description) => {
//     const { data } = await axios.post(
//       "/api/products",
//       name,
//       image,
//       description
//     );
//     return data;
//   }
// );

// export const deleteProduct = createAsyncThunk("deleteProduct", async (id) => {
//   const { data } = await axios.delete(`/api/products/${id}`);
//   return data;
// });

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
    // builder.addCase(addProduct.fulfilled, (state, action) => {
    //   state.push(action.payload);
    // }),
    // builder.addCase(deleteProduct.fulfilled, (state, action) => {
    //   const newProduct = state.filter(
    //     (product) => product.id !== action.payload.id
    //   );
    //   return newProduct;
    // });
  },
});

export default productsSlice.reducer;