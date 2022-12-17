import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Posts.css";
import { FiDelete } from "react-icons/fi";
import { MdOutlineModeEditOutline } from "react-icons/md";

function PostsCard() {
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
            <span className="d-block"> card titel</span>
            <span className="text-muted">card time</span>
          </div>
        </div>
      </div>

      <Card.Img
        variant="top"
        className="img-fluid"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--OZWWRqhw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/do251yaf8msgoojijqyp.PNG"
      />
      <Card.Body className="p-2">
        <Card.Text className="fs-5">Some quick</Card.Text>
        <hr />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text className="float-end">
        <a className="mx-2 btn text-warning " >
            <MdOutlineModeEditOutline size={25}  />
          </a>
          <a className="mx-2 btn text-danger " >
            <FiDelete  size={25}/>
          </a>
         
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostsCard;
