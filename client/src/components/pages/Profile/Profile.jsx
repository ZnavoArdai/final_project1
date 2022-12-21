import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../../../service/userServices";
import { loggedOut } from "../../../store/userReducer";
import PostsCard from "../posts/PostsCard";
import ProfileCard from "../profileCard/ProfileCard";

const Profile = () => {
  const [user, setUser] = useState();
const dispatch=useDispatch()
const navigate=useNavigate()
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getUserById(id)
      .then((res) => setUser(res.user))
      .catch((error) => console.log(error));
  }, []);

  const logout=()=>{
    dispatch(loggedOut)
    localStorage.removeItem("userId")
    navigate("/")

    window.location.reload()

  }

  console.log(user);
  return (
    <div className="mt-5 text-center">
      <div className="mt-5">------------------</div>
      {user && (
        <div className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.image} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email} </Card.Text>
              <Button style={{ border: "none", width: 200 }} onClick={logout}>Log out</Button>
            </Card.Body>
          </Card>
        </div>
      )}

{user&&user.posts.length>0?<h1 className="mt-5">my posts</h1>:""} 

      <div className="d-flex justify-content-center">

        {user && user.posts.map((post,index) =>
        <ProfileCard post={post} index={index}/>)}
      </div>
    </div>
  );
};

export default Profile;
