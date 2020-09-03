import React,{useContext} from 'react'

import {Container,Button,Input} from '@material-ui/core'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider'


import Candidate from '../Components/CandidateComponent'

const AdminPage =({})=>{
    const{currentUser} = useContext(firebaseAuth).admin
    return(
        <div>
            <h3>WELCOME ADMIN {currentUser.email}</h3>
        </div>

    )
}

export default AdminPage