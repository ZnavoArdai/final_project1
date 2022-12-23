import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../../service/PostsService'

const Home = () => {
const isLoggedIn=useSelector(state=>state.isLoggedIn)

  const [post,setPost]=useState()

  useEffect(()=>{

    getAllPosts().then(res=>setPost(res?.post))
  },[])

  console.log(post)
  return (
<div className='main mt-5 text-center'>


    
  <div className='homeHeader mt-5'  style={{height:550}} >
  
  <h1 className='  '>New Tech Blog</h1>



  </div>
  <h1 className='mt-5'>Latest 3 posts</h1>


  <div>

  
<div className=" mt-5 d-flex justify-content-evenly">
<Card style={{ width: "20rem",background:"rgba(59,177,153,255)" }}>
  <Card.Img variant="top" style={{maxHeight: "10rem" }} src={post&&post[post.length-1].image}/>
  <Card.Body>
    <Card.Title>{post&&post[post.length-1].title}</Card.Title>
  </Card.Body>    <Card.Text> author: {post&&post[post.length-2].user.name} </Card.Text>

</Card>
<Card style={{ width: "20rem",background:"rgba(59,177,153,255)" }}>
  <Card.Img variant="top" style={{maxHeight: "10rem" }} src={post&&post[post.length-2].image}/>
  <Card.Body>
    <Card.Title>{post&&post[post.length-2].title}</Card.Title>
  </Card.Body>    <Card.Text>author: {post&&post[post.length-2].user.name} </Card.Text>

</Card>
<Card style={{ width: "20rem",background:"rgba(59,177,153,255)" }}>
  <Card.Img variant="top" style={{maxHeight: "10rem" }} src={post&&post[post.length-3].image}/>
  <Card.Body>
    <Card.Title>{post&&post[post.length-3].title}</Card.Title>
  </Card.Body>    <Card.Text>author: {post&&post[post.length-2].user.name} </Card.Text>

</Card>

</div>
<div className='mt-5 d-flex justify-content-center mb-5'>

{!isLoggedIn&&(<>
  <Button style={{ border: "none", width: 200 ,marginRight:55,background:"rgba(59,177,153,255)"}} >Sing In</Button>
<Button style={{ border: "none", width: 200 ,background:"rgba(59,177,153,255)"}} >Posts</Button>
</>

)}


</div>
  </div>

</div>
  )
}

export default Home