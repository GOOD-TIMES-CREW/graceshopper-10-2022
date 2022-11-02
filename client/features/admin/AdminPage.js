import React from "react";
import { useSelector } from "react-redux";
import AllOrders from "../user/AllOrders";
import AllUsers from "../user/AllUsers";

function AdminPage() {
  const { firstName, lastName } = useSelector((state) => state.auth.me);

  return (
    <div className="single-user">
      <h1>
        Hi, {firstName} {lastName}!
      </h1>
      <>
        <AllOrders />
        <AllUsers />
      </>
    </div>
  );
}

export default AdminPage;
