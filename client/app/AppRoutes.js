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
import Store from "../features/cart/Store";
import Register from "../features/registration/Register";
import AccountPage from "../features/user/AccountPage";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
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
        </Routes>
      ) : (
        <Routes>
          {/* <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          /> */}
          <Route path="/*" element={<Store />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />

          <Route to="/users/:id" element={<AccountPage />} />
          <Route path="/order_history" element={<OrderHistory />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          {/* <Route path="/orders" element={<AllOrders />} />
          <Route path="/orders/:id" element={<SingleOrder />} /> */}
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;

// return (
//   <div>
//     {isLoggedIn ? (
//       <Routes>
//         <Route path="/*" element={<Home />} />
//         <Route to="/home" element={<Home />} />
//         {/* <Route path="/allproducts" element={<AllProducts />} /> */}
//       </Routes>
//     ) : (
//       <Routes>
//         <Route
//           path="/*"
//           element={<AuthForm name="login" displayName="Login" />}
//         />
//         <Route
//           path="/login"
//           element={<AuthForm name="login" displayName="Login" />}
//         />
//         <Route
//           path="/signup"
//           element={<AuthForm name="signup" displayName="Sign Up" />}
//         />
//       </Routes>
//     )}
//   </div>
// );
// };
