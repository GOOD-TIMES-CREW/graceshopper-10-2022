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
  const [email, setEmail] = useState(user.email);

  console.log(user.email);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editUser({ id, firstName, lastName, email }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h4>Edit User Info</h4>
      </label>
      <p>First Name: </p>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <p>Last Name: </p>
      <input
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Email: </p>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditUser;
