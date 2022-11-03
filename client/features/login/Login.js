import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { authenticate } from "../../app/store";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({ name, displayName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    dispatch(
      authenticate({
        username,
        password,
        method: formName,
      })
    );
    const form = evt.currentTarget;
    if (form.checkValidity() === false) {
      evt.stopPropagation();
    }
    setValidated(true);
    navigate("/");
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        name={name}
      >
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter your username..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a username.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your password..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </Form.Group>

        {/* <Button type="submit"></Button> */}
        <button
          type="submit"
          className="button mt-8 p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white"
        >
          {displayName}
        </button>
      </Form>

      <div className="pt-10 items-center">
        <h3 className="mt-10 text-red-700">Don't have an account?</h3>
        <button
          onClick={() => navigate("/signup")}
          className="button mt-8 p-2 text-xs font-extrabold md:text-sm bg-gradient-to-b from-blue-200 to-pink-400 border border-blue-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 active:from-blue-500 text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
