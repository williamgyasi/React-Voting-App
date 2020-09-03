import React,{useContext,useEffect} from "react";
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";

import AuthProvider from '../ContextProviders/UserAuthProvider'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

import Signup from '../Pages/UserRegister'
import HomePage from "../Pages/HomePage";
import AdminPage from '../Pages/AdminPage'
import AdminLogin from '../Pages/AdminLogin'

const AdminRouting=(props)=> {
  const {adminID} =useContext(firebaseAuth)
  return (
    <Router>
      <Route exact path='/admin' render={rProps=>adminID ? <AdminPage/> :<AdminLogin />} />
    </Router>
  
  );
}

export default AdminRouting;