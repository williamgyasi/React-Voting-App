import React,{useContext} from 'react'
import {Container,Button,Input,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Icon, Badge } from "antd";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Candidate from '../Components/CandidateComponent'

import AdminHeaderBar from '../Components/AdminHeaderBar'



const AdminPage =({})=>{
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)
    return(
        <div  >
            <AdminHeaderBar email={email} handleSignOut={handleSignOut} />

            <Container>
                
            </Container>
        
        </div>
  

    )
}

export default AdminPage