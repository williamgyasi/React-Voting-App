import React,{useContext,useEffect} from "react";
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";

import AdminPage from '../Pages/AdminPage'
import AuthProvider from '../ContextProviders/UserAuthProvider'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

import Signup from '../Pages/UserRegister'
import Homepage from "../Pages/UserHomePage";
import UserLogin from '../Pages/UserLoginPage'


const UserRouting=(props)=> {
  const {user} =useContext(firebaseAuth)

  return(
    <Router>
      <Route exact path='/' render={rProps=>user ? <Homepage/> :<UserLogin />} />
    </Router>
  )

 

}

export default UserRouting;