import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const { data } = await axios.get("/api/users");
  return data;
});

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUser",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "createUser",
  async ({ firstName, lastName, email, password }) => {
    const { data } = await axios.post("/api/users", {
      firstName,
      lastName,
      email,
      password,
    });
    return data;
  }
);

export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  const { data } = await axios.delete(`/api/users/${userId}`);
  return data;
});

export const editUser = createAsyncThunk(
  "editUser",
  async ({ id, firstName, lastName, email }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, {
        firstName,
        lastName,
        email,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    }),
      builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.push(action.payload);
    }),
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        // o: you can juse return from the filter statement here
        const newUser = state.filter((user) => user.id !== action.payload.id);
        return newUser;
      });
  },
});

export default usersSlice.reducer;
