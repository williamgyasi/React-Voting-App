import React,{useContext} from 'react'
import {Container,Button,Input} from '@material-ui/core'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

import Candidate from '../Components/CandidateComponent'

const HomePage =({})=>{
    const {handleSignOut} =useContext(firebaseAuth)
    return(
        <div>
           <button onClick={handleSignOut}>LOGOUT</button>
        </div>
    )
}

export default HomePage;