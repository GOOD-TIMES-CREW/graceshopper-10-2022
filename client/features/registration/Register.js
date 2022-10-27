import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../user/userSlice";

function Register() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(createUser(firstName, lastName, email, password));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <strong>Create an Account</strong>
      </label>
      <br />
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
      <p>Password: </p>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="submit" type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;
