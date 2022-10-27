import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// not using the code block below right now. Will use for admin later on
// export const fetchAllOrders = createAsyncThunk(
//   "fetchAllOrders",
//   async () => {
//     try {
//       const { data } = await axios.get("/api/orders");
//       return data;
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
// );

export const fetchUserOrderHistory = createAsyncThunk(
  "fetchUserOrderHistory",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/orders/user/${id}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    userOrderHistory: [{}],
    // allOrders: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
      state.userOrderHistory = action.payload;
    });
    // builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
    //   state.allOrders = action.payload;
    // });
  },
});

export default ordersSlice.reducer;
