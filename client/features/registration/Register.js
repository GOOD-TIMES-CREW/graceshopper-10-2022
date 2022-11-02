import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "../../app/store";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = ({ name, displayName }) => {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const username = evt.target.username.value;
    const password = evt.target.password.value;

    dispatch(
      authenticate({
        firstName,
        lastName,
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
  };

  return (
    <div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        name={name}
      >
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>first Name</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter your first name..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your first name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group size="lg" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter your last name..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide your last name.
          </Form.Control.Feedback>
        </Form.Group>

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

        <Form.Group size="lg" controlId="password">
          <Form.Check
            required
            label="I agree to terms and conditions"
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit">{displayName}</Button>
      </Form>
    </div>
  );
};

export default Register;
