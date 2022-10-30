import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { createUser } from "../user/userSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import * as yup from "yup";

const validation = yup.object().shape({
  firstName: yup.string().required("First Name is required."),
  lastName: yup.string().required("Last Name is required."),
  email: yup.string().email().required("Email is required."),
  password: yup.string().min(6).required("Password is required."),
  termsCheckbox: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service."),
});

function Register() {
  // const dispatch = useDispatch();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = (values, actions) => {
    actions.resetForm();

    //ADD FUNCTIONALITY TO GO TO ACCOUNT PAGE BASED ON VALUES(CREDENTIALS) HERE
  };

  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      termsCheckbox: false,
    },
    validationSchema: validation,
    onSubmit,
  });

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   dispatch(createUser({ firstName, lastName, email, password }));
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPassword("");
  // };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label id="underline">
        <h4>Create an Account</h4>
      </Form.Label>
      <br />
      <Form.Label>First Name </Form.Label>
      <Form.Control
        name="firstName"
        placeholder="Enter first name.."
        value={values.firstName}
        onChange={handleChange}
      />
      {errors.firstName && touched.firstName && (
        <p className="font-validation">{errors.firstName}</p>
      )}
      <hr />

      <p>Last Name </p>
      <Form.Control
        name="lastName"
        placeholder="Enter last name.."
        value={values.lastName}
        onChange={handleChange}
      />
      {errors.lastName && touched.lastName && (
        <p className="font-validation">{errors.lastName}</p>
      )}
      <hr />

      <Form.Label>Email </Form.Label>
      <Form.Control
        name="email"
        placeholder="Enter email.."
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && touched.email && (
        <p className="font-validation">{errors.email}</p>
      )}
      <hr />

      <p id="font-validation">Password </p>
      <Form.Control
        name="password"
        placeholder="Enter password.."
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && touched.password && (
        <p className="font-validation">{errors.password}</p>
      )}

      <MDBCheckbox
        name="flexCheck"
        value={values.termsCheckbox}
        id="flexCheckDefault"
        label="I agree to the terms of service."
      />
      {errors.termsCheckbox && touched.termsCheckbox && (
        <p className="font-validation">{errors.termsCheckbox}</p>
      )}

      <hr />

      <Button variant="primary" type="submit">
        Continue
      </Button>
    </Form>
  );
}

export default Register;
