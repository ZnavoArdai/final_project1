import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { register } from "../../../service/userServices";

export const SingUp = ({ handelSingIn }) => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    secundPassWord: "",
  });
  const [error, setError] = useState({});

  const handeFormChange = (e) => {
    setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
    console.log(signUpForm);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setError(validateForm(signUpForm));
    console.log(error);
    if (Object.keys(error).length == 0) {
     register(signUpForm)
  
    document.getElementById("registerSuccess").innerText="Register done successfully"
    }
  };

  const validateForm = (value) => {
    const eror = {};
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!value.name) {
      eror.name = "name required";
    }
    if (!value.password) {
      eror.password = "password required";
    } else if (value.password.length < 4) {
      eror.password = "password to short";
    }
    if (value.secundPassWord !== value.password) {
      eror.secundPassWord = "password not confirmed";
    }
    if (!value.email) {
      eror.email = "email required";
    } else if (!regex.test(value.email)) {
      eror.email = "not valid";
    }

    return eror;
  };
  return (
    <div className="sinup mb-5">
      <Form className="card p-5">
        <Form.Text className="fs-6">
          <h3>Register</h3>
        </Form.Text>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="User Name"
            name="name"
            onChange={(e) => handeFormChange(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.name}</span>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
            onChange={(e) => handeFormChange(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.email}</span>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="******"
            name="password"
            onChange={(e) => handeFormChange(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.password}</span>
        <Form.Group className="mb-3" controlId="secundPassWord">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="******"
            name="secundPassWord"
            onChange={(e) => handeFormChange(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.secundPassWord}</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Button className="w-50 rounded-5" onClick={(e) => submitForm(e)}>
            Submit
          </Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Button className="w-50 rounded-5" onClick={handelSingIn}>
            Sing In
          </Button>
        </Form.Group>

        <h4 id="registerSuccess" className="text-success"></h4>
      </Form>
    </div>
  );
};
export default SingUp;
