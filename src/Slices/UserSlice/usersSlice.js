import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("getUser", async () => {
  const { data } = await axios.get("http://localhost:3003/users");
  return data;
});

export const createUser = createAsyncThunk("createUser", async (newUser) => {
  const { data } = await axios.post("http://localhost:3003/users", newUser);
  return data;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id) => {
  const { data } = await axios.delete(`http://localhost:3003/users/${id}`);
  return data;
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ name, email, password, id }) => {
    const { data } = await axios.patch(`http://localhost:3003/users/${id}`, {
      name,
      email,
      password,
    });
    console.log(name, "new");
    console.log(email, "email");
    return data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
      state.error = "Error retrieving users";
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = [...state.users, action.payload];
    });
    builder.addCase(createUser.rejected, (state) => {
      state.error = "Error creating user";
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
  },
});

export default usersSlice.reducer;
