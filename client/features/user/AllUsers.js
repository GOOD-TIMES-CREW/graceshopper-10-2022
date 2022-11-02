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
    <div className="all-users">
      <h1>All Users</h1>
      {users?.map(({ id, firstName, lastName, username }) => (
        <div key={id} className="user-container">
          <h3>
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
