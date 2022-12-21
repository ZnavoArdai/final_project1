import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getUserById } from '../../../service/userServices'

const Profile = () => {
const [user,setUser]=useState()

const id=localStorage.getItem("userId")

useEffect(()=>{

  getUserById(id).then((res)=>setUser(res.user)).catch((error)=>console.log(error))

},[])

console.log(user)
  return (
    <div className='mt-5 text-center'>

<h1>my profile</h1>

{user&&<div className='mt-5 text-center'>
  <h3>{user.name}</h3>
  <h3>{user.email}</h3>

</div>}
    </div>
  )
}

export default Profile