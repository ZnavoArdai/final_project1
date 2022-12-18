import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { loging } from "../../../service/userServices";

export const SignIn = ({handelSingIn}) => {
    const [signInForm, setSingInForm] = useState({
        email: "",
        password: "",
  
      });
      const [error, setError] = useState({})
    
    
      const handeFormChange = (e) => {
        setSingInForm({ ...signInForm, [e.target.name]: e.target.value });
        console.log(signInForm);
      };
    
      const submitForm = (e) => {
        e.preventDefault();
        setError( validateForm(signInForm))

        if(Object.keys(error).length==0){
            loging(signInForm)
        }
      };
    
      const validateForm = (value) => {
        const eror = {};
        let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    
        if (!value.password) {
          eror.password = "password required";
        }
       else if (value.password.length<4) {
            eror.password = "password to short";
          }
     
        if (!value.email) {
          eror.email = "email required";
        } else if (!regex.test(value.email)) {
          eror.email = "not valid";
        }
    
        return eror;
      };
  return (
    <div className="singIn">
      <Form className="card p-5">
        <Form.Text className="fs-6"><h3>Sing In</h3></Form.Text>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" onChange={(e)=>handeFormChange(e)} />
        </Form.Group>
        <span className="text-danger">{error.email}</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>password</Form.Label>
          <Form.Control type="text" placeholder="******" name="password" onChange={(e)=>handeFormChange(e)} />
        </Form.Group>
        <span className="text-danger">{error.password}</span>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Button className="w-50 rounded-5" onClick={(e)=>submitForm(e)}>Log In</Button>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Button className="w-50 rounded-5" onClick={handelSingIn}>Register</Button>
        </Form.Group>
      </Form>
    </div>
  );
};
export default SignIn;
