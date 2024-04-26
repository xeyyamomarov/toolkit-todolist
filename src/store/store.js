import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/CounterSlice/counterSlice";
import usersReducer from "../Slices/UserSlice/usersSlice";

export const store = configureStore({
  reducer: {
    count: counterReducer,
    users: usersReducer,
  },
});
