import React from 'react'
import {Container,Button,TextField} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
const Candidate =({candidateName,position,uri,state})=>{
    return(
        <div
        style={{
            width:270,
            height:300,
            borderRadius:10,
            padding:10,
        }}>
        <img
        style={{
            width:"100%",
            height:"90%",
        }}
        src={uri}
        alt={"Face"} />
        <h2 style={{textAlign:"center",marginTop:5,marginBlockEnd:0,fontSize:30}}>{candidateName}</h2>
        <h3 style={{textAlign:"center",marginTop:0,color:"#9ea2a8"}}>{position}</h3>
                  
        </div>

    )
}

export default Candidate