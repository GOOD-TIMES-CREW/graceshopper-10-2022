import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Potential path and function to fetch order history
import { fetchUserOrderHistory } from "./orderSlice";
import { NavLink } from "react-router-dom";

const OrderHistory = () => {
  // Potential functions when everything is connected
  const dispatch = useDispatch();
  const orderHistory = useSelector((state) => state.orders.userOrderHistory);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(id));
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
