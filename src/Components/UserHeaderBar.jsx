import React,{useContext} from 'react'
import {Container,Button,Input,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import {firebaseAuth} from '../ContextProviders/UserAuthProvider';
import { Layout, Icon, Badge } from "antd";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Candidate from '../Components/CandidateComponent'

const UserHeaderBar=({leftIcon,email,handleSignOut})=>{
    return(
        <AppBar position="static">
                <Toolbar style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"green"}}>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu"><MenuIcon /></IconButton> */}
                    <Typography variant="h6">
                        Welcome  {email}
                    </Typography>
                    <IconButton onClick={handleSignOut} edge="start" color="inherit" aria-label="menu"><ExitToAppIcon /></IconButton>
                    </Toolbar>
                    </AppBar>
    )
}

export default UserHeaderBar;