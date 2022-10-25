import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

export const createUser = createAsyncThunk(
  "createUser",
  async (firstName, lastName, email, password) => {
    const { data } = await axios.post(
      "/api/users",
      firstName,
      lastName,
      email,
      password
    );
    return data;
  }
);

export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    }),
      builder.addCase(createUser.fulfilled, (state, action) => {
        state.push(action.payload);
      }),
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        const newUser = state.filter((user) => user.id !== action.payload.id);
        return newUser;
      });
  },
});

export default usersSlice.reducer;
