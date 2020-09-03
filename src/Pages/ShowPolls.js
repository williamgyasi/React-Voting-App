import React,{useContext} from 'react'
import AdminHeaderBar from '../Components/AdminHeaderBar'
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';


const ShowPolls =()=>{
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)
    return(
        <div>
          <AdminHeaderBar email={email} handleSignOut={handleSignOut} />
          <h3>WELCOME TO SHOWPOLSS</h3>
        </div>
    )
}

export default ShowPolls