import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { newPost } from "../../../service/PostsService";

function NewPost() {
  const [formInputs, setFormInputs] = useState({
    category: "",
    date: "",
    title: "",
    image: "",
    subject: "",
  });
  const [error, setError] = useState({});
  const navigate=useNavigate()
  const [isSubmit, setIsSubmit] = useState(false);

  const formHandel = (e) => {
    setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    console.log(formInputs);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setError(validateForm(formInputs))
    newPost(formInputs).then((res) => console.log(res));
    setIsSubmit(true)
  };
  const validateForm = (value) => {
    const eror = {};
    if (!value.category) {
      eror.category = "category required";
    }
   
    if (!value.image) {
      eror.image = "image required";
    }
    if (!value.subject ) {
      eror.subject = "subject required";
    }
    if (!value.title) {
      eror.title = "title required";
    }
    if (!value.date) {
        eror.date = "date required";
      }
      
    return eror;
  };
  useEffect(()=>{
    if (Object.keys(error).length === 0&& isSubmit) {
        setTimeout(()=>{
            navigate("/")
        },3000)
        console.log(error)

       }

  },[error])
  return (
    <div className=" update">
      <span className="newpostTitile">
        {" "}
        <h2>
          Right new post <TfiWrite color="pink" size={80} />
        </h2>{" "}
      </span>
      <Form>
  


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="category"
            placeholder="java scrip ,css or HTML"
            onChange={(e) => formHandel(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.category}</span>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>date</Form.Label>
          <Form.Control
            className="input"
            type="date"
            name="date"
            placeholder="Today Date"
            onChange={(e) => formHandel(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.date}</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>title</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="title"
            placeholder="title of the post"
            onChange={(e) => formHandel(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.title}</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>image url</Form.Label>
          <Form.Control
            className="input"
            type="text"
            name="image"
            placeholder="subject image"
            onChange={(e) => formHandel(e)}
          />
        </Form.Group>
        <span className="text-danger">{error.image}</span>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject </Form.Label>
          <Form.Control
            as="textarea"
            name="subject"
            onChange={(e) => formHandel(e)}
            rows={3}
          />
        </Form.Group>
        <span className="text-danger">{error.subject}</span>

        <Button className="rounded-5 w-100" onClick={(e) => submitForm(e)}>
          share post
        </Button>
        
    </Form>
    <div className="d-flex justify-content-center">
    {
    Object.keys(error).length==0 && isSubmit ?(<img className="w-25" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="" />):""
}   
    </div>
 
    </div>
  );
}

export default NewPost;
