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
      {users?.map((user) => (
        <div key={user.id} className="user-container">
          <h3>
            <Link to={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default AllUsers;
