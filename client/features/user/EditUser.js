import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { editUser } from "./userSlice";

function EditUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.users.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [username, setUsername] = useState(user.username);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editUser({ id, firstName, lastName, username }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4>Edit User Info</h4>
      </label>
      <p>First Name: {user.firstName}</p>
      <input
        name="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Last Name: {user.lastName}</p>
      <input
        name="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Email: {user.username}</p>
      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
