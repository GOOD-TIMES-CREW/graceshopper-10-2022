import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/authSlice";
import productsSliceReducer from "../features/productsSlice";
import userSliceReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSliceReducer,
    users: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/authSlice";
