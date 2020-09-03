import React,{useContext} from 'react'
import {Container,Button,Input,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Layout, Icon, Badge } from "antd";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Candidate from '../Components/CandidateComponent'

import AdminHeaderBar from '../Components/AdminHeaderBar'
import AdminNav from '../Components/AdminNavComponents'
import AddIcon from '@material-ui/icons/Add';
import PollIcon from '@material-ui/icons/Poll';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const AdminPage =({})=>{
    document.title="ADMIN PAGE"
    const{email} = useContext(firebaseAuth).admin
    const{handleSignOut} = useContext(firebaseAuth)

    
      
    return(
        <div  >
            <AdminHeaderBar email={email} handleSignOut={handleSignOut} />
            <Container
            style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                marginTop:"10%"
            }}
            >
                <AdminNav name={"Add Candidate"} link="/addcandidate" link={"/addcandidate"} icon={<AddIcon style={{ fontSize: 80,color:"white" }}   />} />
                <AdminNav name={"Add User"} link={"/adduser"} icon={<PersonAddIcon style={{ fontSize: 80,color:"white" }}  />} />
                <AdminNav name={"Show Polls"} link={"/showpolls"} icon={<PollIcon style={{ fontSize: 80,color:"white" }}  />} />

            </Container>
        
        </div>
  

    )
}

export default AdminPage