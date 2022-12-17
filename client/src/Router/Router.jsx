import React from 'react'

import {Route,Routes} from "react-router-dom"
import Auth from '../components/pages/Auth/Auth'
import SignIn from '../components/pages/Auth/signIn'
import SingUp from '../components/pages/Auth/SingUp'
import Home from '../components/pages/Home/Home'
import Posts from '../components/pages/posts/Posts'
const Router = () => {
  return (

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Posts' element={<Posts/>} />
        <Route path='signIn/signUp' element={<Auth/>} />
        <Route path='SignIn' element={<SignIn/>} />
        <Route path='SignUp' element={<SingUp/>} />
    </Routes>
  )
}

export default Router