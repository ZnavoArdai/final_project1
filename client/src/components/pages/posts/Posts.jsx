import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPosts } from '../../../service/PostsService'
import PostsCard from './PostsCard'

let tset=["a","b","5","sad"]


const Posts = () => {
const [posts,setPosts]=useState()
  useEffect(()=>{
    getAllPosts().then((res)=>setPosts(res?.post))
  },[])
  return (
    <div className='main d-flex justify-content-center container-fluid row mt-5'>

{posts&&posts.map((post,index)=> {
return(
  <div className='col-12 d-flex justify-content-center'>
<PostsCard post={post} key={index} />
  </div>
)}
)}
    </div>
  )
}

export default Posts