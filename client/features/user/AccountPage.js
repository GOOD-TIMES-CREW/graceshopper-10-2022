import React, { useEffect } from "react";
import { fetchSingleUser } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import OrderHistory from "./OrderHistory";
import EditUser from "./EditUser";

function AccountPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useSelector((state) => state.auth.me.id);
  const { firstName, lastName, isAdmin } = useSelector(
    (state) => state.auth.me
  );

  console.log(id);

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch]);

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="single-user">
      <h1>
        Hi, {firstName} {lastName}!
      </h1>
      <button type="button" onClick={logoutAndRedirectHome}>
        Logout
      </button>
      <EditUser />
      <OrderHistory />
    </div>
  );
}

export default AccountPage;
