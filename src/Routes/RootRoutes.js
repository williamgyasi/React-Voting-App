import React,{useContext,useEffect} from "react";
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";

import AuthProvider from '../ContextProviders/UserAuthProvider'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

import Signup from '../Pages/UserRegister'
// import HomePage from "../Pages/HomePage";

import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'



const RootRouting=(props)=> {
  const {userID} =useContext(firebaseAuth)
  return(
  <Router>
      <Route exact path='/' component={UserRoutes} />
      <Route exact path='/admin' component={AdminRoutes} />
</Router>
)

  
 
}

export default RootRouting;