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
    <div className="flex flex-col items-center space-x-2 mb-5">
      <h1>All Orders</h1>
      {orders?.map((order) => (
        <div key={order.id} className="orders-container">
          <h3 className="font-extrabold">
            {/* <Link to={`/orders/${order.id}`}>{order.confirmationNumber}</Link> */}
            {order.confirmationNumber}
          </h3>
          <p>Date Ordered: {order.dateOrdered}</p>
          <p>Status: {order.status}</p>
          <p>Shipping Address: {order.shipping_address}</p>
          <p>Shipped: {order.shipped}</p>
        </div>
      ))}
    </div>
  );
}

export default AllOrders;
