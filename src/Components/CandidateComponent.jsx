import React from 'react'
import {Container,Button,TextField} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
const Candidate =({name,position})=>{
    return(
        <div
        style={{
            width:270,
            height:300,
            borderRadius:10
        }}>
        <img
        style={{
            width:"100%",
            height:"90%",
        }}
        src={require('../Assets/candidate-face.jpg')}
        alt={"Face"} />
        <h3 style={{textAlign:"center",marginTop:10}}>William Gyasi</h3>
        <h5 style={{textAlign:"center"}}>Head of ushers</h5>
        <Button variant="contained" 
        style={{color:"white",backgroundColor:"green",width:"100%",marginTop:10,}}
        >
            <CheckIcon style={{marginRight:10}} />
            Vote
        </Button>            
        </div>

    )
}

export default Candidate