import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Container,Button,Input,AppBar,Toolbar,IconButton,Typography} from '@material-ui/core'


const AdminNav=({icon,name,link,onClick})=>{
    return(
        <div 
        onClick={onclick}
        style={{
            width:300,
            cursor:"pointer",
            height:250,
            borderRadius:10,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"green",
        }}
        >
            {icon}
            <Typography style={{color:"white"}} variant="h6">
            {name}
            </Typography>
            



        </div>

    )
}

export default AdminNav