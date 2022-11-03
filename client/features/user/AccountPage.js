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
    <div className="bg-gradient-to-b from-blue-300 to-blue-600">
      <div className="relative flex flex-col m-5 z-30 p-10 bg-pink-200">
        <h1>
          Hi, {firstName} {lastName}!
        </h1>
        <button
          type="button"
          className="button mt-8 p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white"
          onClick={logoutAndRedirectHome}
        >
          Logout
        </button>
        {/* <EditUser /> */}
        <OrderHistory />
      </div>
    </div>
  );
}

export default AccountPage;
