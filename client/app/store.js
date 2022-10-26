import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/authSlice";
import productsSliceReducer from "../features/productsSlice";
import userSliceReducer from "../features/userSlice";
import orderSliceReducer from "../features/orderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSliceReducer,
    users: userSliceReducer,
    orders: orderSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/authSlice";
