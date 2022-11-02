import React from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { authenticate } from "../../app/store";

const validation = yup.object().shape({
  username: yup.string().email().required("Email is required."),
  password: yup.string().min(6).required("Password is required."),
});

function Login() {
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    actions.resetForm();
    const formName = values.name;
    const username = values.username;
    const password = values.password;
    dispatch(authenticate({ username, password, method: formName }));
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit,
  });

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit} name={values.name}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control
            name="username"
            type="email"
            placeholder="Enter your email.."
            value={values.username}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <p className="font-validation">{errors.email}</p>
          )}
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="password"
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
