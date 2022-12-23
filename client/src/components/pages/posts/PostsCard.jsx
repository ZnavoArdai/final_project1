import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Posts.css";
import { FiDelete } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { get } from "mongoose";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../store/userReducer";
import { useEffect } from "react";

function PostsCard({post,deleteBtn}) {
  const dispatch=useDispatch()

  const isLoggedUser=()=>{
    if(localStorage.getItem("userId")==post.user._id){

      return true
    }
  
      return false
  
  }

  


    
  
  console.log(post.user)


  return (
    <Card style={{width:"55rem" ,background:"rgba(59,177,153,255)"}}
      
      className="mt-4 mb-4 p-2 border-0 cardContainer"
    >
      <div className="top ">
        <div className="avatar p-2">
          <img
            className=""
            width={50}
            src={post.user.image?post.user.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU"}
          />
          
        </div>
        <div>
          <div className="mx-3">
            <span className="d-block text-light"> {post.category}</span>
            <span className="text-muted">{new Date (`${post.date}`).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Card.Img
        variant="top"
        className="img-fluid"
        src={post.image}
        style={{height:300}}
      />
      <Card.Body className="p-2">
        <Card.Text className="fs-5 text-light">{post.title}</Card.Text>
        <hr />
        <Card.Text className="text-light">
        {post.description}
        <hr />
<span>author:{""}{post.user.name}</span>
        </Card.Text>

       
        {isLoggedUser() ? (
           <Card.Text className="float-end">

            <a className="mx-2 btn text-warning " href={`/POSTS/${post._id}`}  >
            <MdOutlineModeEditOutline size={25}    />
          </a>
          
          <a className="mx-2 btn text-danger " onClick={()=>deleteBtn(post._id)} >
            <FiDelete  size={25}/>
          </a>
          
          </Card.Text>
        
      ):""}
      </Card.Body>
    </Card>
  );
}

export default PostsCard;
