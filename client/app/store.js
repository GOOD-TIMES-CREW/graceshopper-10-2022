import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/authSlice";
import productsSliceReducer from "../features/productsSlice";
import userSliceReducer from "../features/userSlice";
// import wishlistSliceReducer from "../features/wishlistSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSliceReducer,
    users: userSliceReducer,
    // wishlist: wishlistSliceReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/authSlice";
