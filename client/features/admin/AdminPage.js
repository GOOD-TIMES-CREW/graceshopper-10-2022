import React from "react";
import { useSelector } from "react-redux";
import AllOrders from "../user/AllOrders";
import AllUsers from "../user/AllUsers";

function AdminPage() {
  const { firstName, lastName } = useSelector((state) => state.auth.me);

  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-600">
      <h1 className="font-extrabold">
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
