import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrders } from "./orderSlice";
import { Link } from "react-router-dom";

function AllOrders() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.allOrders);

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);
  return (
    <div className="all-orders">
      <h1>All Orders</h1>
      {orders?.map((order) => (
        <div className="orders-container">
          <h3>
            <Link to={`/orders/${order.id}`}>{order.confirmationNumber}</Link>
          </h3>
          <p> Date Ordered: {order.dateOrdered}</p>
          <p>Status: {order.status}</p>
          <p>Shipping Address: {order.shipping_address}</p>
          <p>Shipped: {order.shipped}</p>
        </div>
      ))}
    </div>
  );
}

export default AllOrders;
