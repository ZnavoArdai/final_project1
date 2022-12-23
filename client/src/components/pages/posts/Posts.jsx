import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { deletePost, getAllPosts } from '../../../service/PostsService'
import DeleteAlert from '../../features/alert/Alert'
import PostsCard from './PostsCard'

let tset=["a","b","5","sad"]


const Posts = () => {
  const [alert,setAlert]=useState(false)
const [posts,setPosts]=useState()
  useEffect(()=>{
    getAllPosts().then((res)=>setPosts(res?.post))
  },[alert])

const deleteBtn=(id)=>{
  setAlert(true)

  deletePost(id)
  
  setTimeout(() => {
    setAlert(false)
  },1500 );
}


  
  return (
    <div className='main d-flex justify-content-center container-fluid row mt-5' id='postsShowCase'>
      <div className={alert?'fixed-top mt-5 w-25 d-flex justify-content-center align-items-center h-100':"d-none"} >
      <DeleteAlert />
      <img
            className="w-25"
            src="https://windrosegdansk.pl/common/images/web5Busy.gif"
            alt=""
          />

      </div>

{posts? posts.map((post,index)=> {
return(
  <div className='col-12 d-flex justify-content-center '>
<PostsCard post={post} key={index} deleteBtn={deleteBtn} />
  </div>
)}
):<img className='w-25' src='https://windrosegdansk.pl/common/images/web5Busy.gif'/>}
    </div>
  )
}

export default Posts