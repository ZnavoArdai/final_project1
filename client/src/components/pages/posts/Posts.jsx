import React from 'react'
import PostsCard from './PostsCard'

let tset=["a","b","5","sad"]
const Posts = () => {
  return (
    <div className='main d-flex justify-content-center container-fluid row'>

{tset.map((item)=> {
return(
  <div className='col-12 d-flex justify-content-center'>
<PostsCard/>
  </div>
)}
)}
    </div>
  )
}

export default Posts