import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";

const validation = yup.object().shape({
  email: yup.string().email().required("Email is required."),
  password: yup.string().min(6).required("Password is required."),
});

function Login() {
  const onSubmit = (values, actions) => {
    actions.resetForm();

    //ADD FUNCTIONALITY TO GO TO ACCOUNT PAGE BASED ON VALUES(CREDENTIALS) HERE
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit,
  });

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            placeholder="Enter your email.."
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <p className="font-validation">{errors.email}</p>
          )}
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Enter your password.."
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <p className="font-validation">{errors.password}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
