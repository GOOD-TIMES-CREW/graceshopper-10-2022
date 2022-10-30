// import axios from "axios";
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchWishlist = createAsyncThunk("fetchWishlist", async (id) => {
//   try {
//     const { data } = await axios.get(`/api/products/${id}`);
//     return data;
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// export const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: {},
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchWishlist.fulfilled, (state, action) => {
//       return action.payload;
//     });
//   },
// });

// export default wishlistSlice.reducer;
