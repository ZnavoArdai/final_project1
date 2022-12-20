import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Posts.css";
import { FiDelete } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { get } from "mongoose";
import { Link } from "react-router-dom";

function PostsCard({post,deleteBtn}) {

  const isLoggedUser=()=>{
    if(localStorage.getItem("userId")==post.user._id){
      return true
    }
  
      return false
  
  }

  console.log(post.user)


  return (
    <Card
      style={{ width: "45rem" }}
      className="mt-4 mb-4 p-2 border-0 cardContainer"
    >
      <div className="top ">
        <div className="avatar p-2">
          <img
            className=""
            width={50}
            src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=685"
          />
          
        </div>
        <div>
          <div className="mx-3">
            <span className="d-block"> {post.category}</span>
            <span className="text-muted">{new Date (`${post.date}`).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <Card.Img
        variant="top"
        className="img-fluid"
        src={post.image}
      />
      <Card.Body className="p-2">
        <Card.Text className="fs-5">{post.title}</Card.Text>
        <hr />
        <Card.Text>
        {post.description}
        </Card.Text>

       
        {isLoggedUser() ? (
           <Card.Text className="float-end">

            <a className="mx-2 btn text-warning " href={`/posts/api/${post._id}`}  >
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
