import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  // const token = window.localStorage.getItem("token");
  // , {
  //   headers: {
  //     authorization: token,
  //   },
  const { data } = await axios.get("/api/users");
  return data;
});

export const fetchSingleUser = createAsyncThunk(
  "fetchSingleUser",
  async (id) => {
    const { data } = await axios.get(`/api/users/${id}`);
    return data;
  }
);

export const createUser = createAsyncThunk(
  "createUser",
  async ({ firstName, lastName, username, password }) => {
    const { data } = await axios.post("/api/users", {
      firstName,
      lastName,
      username,
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
  async ({ id, firstName, lastName, username }) => {
    const { data } = await axios.put(`/api/users/${id}`, {
      firstName,
      lastName,
      username,
    });
    return data;
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
        state.filter((user) => user.id !== action.payload.id);
      });
  },
});

export default usersSlice.reducer;
