import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const SignIn = ({handelSingIn}) => {
  return (
    <div className="singIn">
      <Form className="card p-5">
        <Form.Text className="fs-6"><h3>Sing In</h3></Form.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>password</Form.Label>
          <Form.Control type="text" placeholder="******" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Button className="w-50 rounded-5">Log In</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Button className="w-50 rounded-5" onClick={handelSingIn}>Register</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SignIn;
