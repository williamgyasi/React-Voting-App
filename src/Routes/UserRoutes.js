import React,{useContext,useEffect} from "react";
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";

import AdminPage from '../Pages/AdminPage'
import AuthProvider from '../ContextProviders/UserAuthProvider'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

import Signup from '../Pages/UserRegister'
import HomePage from '../Pages/Homepage'
// import HomePage from "../Pages/HomePage";

const UserRouting=(props)=> {
  const {userID} =useContext(firebaseAuth)

  return(
    <Router>
      <Route exact path='/' render={rProps=>userID ? <HomePage/> :<Signup />} />
    </Router>
  )

 

}

export default UserRouting;