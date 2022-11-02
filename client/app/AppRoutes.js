import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllProducts from "../features/products/AllProducts";
import SingleProduct from "../features/products/SingleProduct";
import { me } from "./store";
import Success from "../features/cart/Success";
import Canceled from "../features/cart/Canceled";
import Login from "../features/login/Login";
import Register from "../features/registration/Register";
import AccountPage from "../features/user/AccountPage";
import AllUsers from "../features/user/AllUsers";
import ErrorPage from "../features/error/ErrorPage";
import AddProduct from "../features/products/AddProduct";
import AllOrders from "../features/user/AllOrders";
import Cart from "../features/cart/Cart";

import AdminPage from "../features/admin/AdminPage";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/users/:id" element={<AccountPage />} />
          <Route path="/users/:id/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
          {isAdmin && (
            <>
              <Route to="/home" element={<Home />} />
              <Route path="/users" element={<AllUsers />} />
              <Route path="/orders" element={<AllOrders />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/users/:id" element={<AccountPage />} />
              <Route path="/adminpage" element={<AdminPage />} />
              <Route path="*" element={<ErrorPage />} />
            </>
          )}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<Login name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<Register name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/users/:id" element={<AccountPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
