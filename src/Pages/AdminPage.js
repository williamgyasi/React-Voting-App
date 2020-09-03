import React,{useContext} from 'react'

import {Container,Button,Input} from '@material-ui/core'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'


import Candidate from '../Components/CandidateComponent'

const AdminPage =({})=>{
    const userContext=useContext(firebaseAuth)
    console.log(userContext)
    return(
        <div>
            <h3>WELCOME ADMIN EIII</h3>
        </div>

    )
}

export default AdminPage