import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrderHistory } from "./orderSlice";
import { NavLink } from "react-router-dom";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const orderHistory = useSelector((state) => state.orders.userOrderHistory);
  // When login is setup just comment this back in
  const userId = useSelector((state) => state.auth.me.id);
  // const userId = 1;
  useEffect(() => {
    dispatch(fetchUserOrderHistory(userId));
  }, [dispatch]);

  return (
    <div>
      <h1>Order History</h1>
      <div>
        {orderHistory.map((order) => (
          <div key={order.id}>
            <div>Order ID: {order.id}</div>
            <div>Order Status: {order.status}</div>
            <div>Order Date: {order.dateOrdered}</div>
            <div>Order Number: {order.confirmationNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
