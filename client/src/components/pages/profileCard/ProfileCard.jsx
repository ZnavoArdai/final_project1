
import Card from "react-bootstrap/Card";
import { FiDelete } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../service/PostsService";


function ProfileCard({post}) {
const navigate=useNavigate()
  const deleteBtn=(id)=>{
  
    deletePost(id)

    setTimeout(()=>{

        window.location.reload()
    },1000)

    
    
  }
  return (
    

  <div className="col-12 d-flex justify-content-center">

 
    <Card
      style={{ width: "40rem",background:"rgba(59,177,153,255)" }}
      className="mt-4 mb-4 p-2 border-0 cardContainer "
    >
      <div className="top  ">
        
        <div>
          <div className="mx-3">
            <span className="d-block text-light"> {post.category}</span>
            <span className="text-muted text-light">{new Date (`${post.date}`).toLocaleDateString()}</span>
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
        </Card.Text>

       

           <Card.Text className="float-end">

            <a className="mx-2 btn text-warning " href={`/posts/${post._id}`}  >
            <MdOutlineModeEditOutline size={25}    />
          </a>
          
          <a className="mx-2 btn text-danger " onClick={()=>deleteBtn(post._id)} >
            <FiDelete  size={25}/>
          </a>
          
          </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ProfileCard;