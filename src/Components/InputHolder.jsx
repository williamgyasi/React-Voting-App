import React from 'react'
import {Typography,TextField} from '@material-ui/core'

const InputHolder=({inputText,onInputChange,value,autoComplete,name,type})=>{
    return(
        <div style={{
            marginBottom:20
        }}>
            <TextField
            fullWidth
            variant="outlined"
            name={name}
            type={type}
            label={inputText}
            autoComplete={autoComplete}
            type="text"
            onChange={onInputChange}
            value={value}
            >
            </TextField>
        </div>

    )
}

export default InputHolder