import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";
import { Link } from "react-router-dom";

function AllUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center space-x-2 mb-5">
      <h1>All Users</h1>
      {users?.map(({ id, firstName, lastName, username }) => (
        <div key={id} className="user-container">
          <h3 className="font-extrabold">
            <Link to={`/users/${id}`}>
              {firstName} {lastName}
            </Link>
          </h3>
          <p>{username}</p>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;
