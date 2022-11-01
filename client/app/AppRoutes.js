import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllProducts from "../features/products/AllProducts";
import SingleProduct from "../features/products/SingleProduct";
import { me } from "./store";
import OrderHistory from "../features/user/OrderHistory";
import Success from "../features/cart/Success";
import Canceled from "../features/cart/Canceled";
import Register from "../features/registration/Register";
import AccountPage from "../features/user/AccountPage";
import AllUsers from "../features/user/AllUsers";
import ErrorPage from "../features/error/ErrorPage";
import Login from "../features/login/Login";
import AddProduct from "../features/products/AddProduct";
import AllOrders from "../features/user/AllOrders";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  // Once authentication is fixed comment this line back in and delete hardcoded line
  // const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  const isAdmin = false;

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order_history" element={<OrderHistory />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/users/:id" element={<AccountPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
          <Route path="*" element={<ErrorPage />} />

          {isAdmin && (
            <>
              <Route path="/users" element={<AllUsers />} />
              <Route path="/allorders" element={<AllOrders />} />
              <Route path="/products/add" element={<AddProduct />} />
            </>
          )}
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
