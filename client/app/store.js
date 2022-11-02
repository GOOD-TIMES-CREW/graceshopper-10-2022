import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productsSliceReducer from "../features/products/productsSlice";
import userSliceReducer from "../features/user/userSlice";
import orderSliceReducer from "../features/user/orderSlice";
import cartSliceReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSliceReducer,
    users: userSliceReducer,
    cart: cartSliceReducer,
    orders: orderSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
