import React,{useContext} from 'react'
import AdminHeaderBar from '../Components/AdminHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import {Container,Button,Typography,TextField} from '@material-ui/core'


const AddCandidate =()=>{
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)
    return(
        <div>
          <AdminHeaderBar email={email} handleSignOut={handleSignOut} />
          <Container>

          </Container>
        </div>
    )
}

export default AddCandidate