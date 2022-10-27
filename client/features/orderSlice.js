import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllOrders = createAsyncThunk("fetchAllOrders", async () => {
  try {
    const { data } = await axios.get("/api/orders");
    return data;
  } catch (error) {
    console.error(error.message);
  }
});

export const fetchSingleOrder = createAsyncThunk(
  "fetchSingleOrder",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/orders/${id}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

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
    allOrders: [],
    singleOrder: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
      state.userOrderHistory = action.payload;
    });
    builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
      state.allOrders = action.payload;
    });
    builder.addCase(fetchSingleOrder.fulfilled, (state, action) => {
      state.singleOrder = action.payload;
    });
  },
});

export default ordersSlice.reducer;
