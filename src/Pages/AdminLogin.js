import React,{useContext,useState} from 'react'
import {MuiThemeProvider,Container,Button,TextField,FormControl} from '@material-ui/core'

import {firebaseAuth} from '../ContextProviders/UserAuthProvider'

const AdminLogin =({})=>{
    const {handleSignIn, inputs, setInputs,errors} = useContext(firebaseAuth)
    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value}))
    }
    return(
        <div
        style={{
            display:"flex",
            alignItems:"center",
            flex:1,
            flexDirection:"column",
            height:"100vh",
            justifyContent:"center"
        }}
        >
             <div>
                <h3>WELCOME ADMIN</h3>
            </div>  
            <div>
                <Container style={{padding:10,width:420,height:440,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <form noValidate autoComplete="off" >
                    <TextField
                    id="outlined-basic" 
                    label="Email" 
                    name="email"
                    fullWidth
                    variant="outlined" 
                    value={inputs.email}
                    onChange={handleChange}
                    />

                    <TextField 
                    style={{
                        marginTop:10
                    }}
                    id="outlined-basic" 
                    label="Password"
                    fullWidth
                    name="password"
                    helperText={errors}
                    type="password"
                    value={inputs.password}
                    onChange={handleChange}
                    variant="outlined" />

                    </form>

                    <Button
                    onClick={handleSignIn}
                    color="primary" 
                    style={{marginTop:30}}
                    variant="contained">
                        Login Admin

                    </Button>
                    

                </Container>
            </div>
        </div>  
    )

}

const style = {
    margin: 15,
};

export default AdminLogin