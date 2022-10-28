import React, { useEffect } from "react";
import { fetchSingleUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import OrderHistory from "./OrderHistory";
import EditUser from "./EditUser";

function AccountPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div className="single-user">
      <h1>
        Hi, {user.firstName} {user.lastName}!
      </h1>
      <p>Email: {user.email}</p>
      <EditUser />
      <OrderHistory />
    </div>
  );
}

export default AccountPage;
