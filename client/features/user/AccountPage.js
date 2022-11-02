import React, { useEffect } from "react";
import { fetchSingleUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import OrderHistory from "./OrderHistory";
import EditUser from "./EditUser";

function AccountPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { firstName, lastName } = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  return (
    <div className="single-user">
      <h1>
        Hi, {firstName} {lastName}!
      </h1>
      <EditUser />
      {/* <OrderHistory /> */}
    </div>
  );
}

export default AccountPage;
