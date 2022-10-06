import React, { useState } from 'react'
import {makeStyles, Card,TextField} from '@material-ui/core'


export default function Login({history,location,match}){
    const useStyle = makeStyles((theme)=>({
        container:{
            
            justifyContent:'center',
            backgroundColor:'green',
            
        }
        
    }))
    console.log('inside Login')
    const [email , setEmail]= useState('')
    //const [password, setPassword]= useState('')
    const classes=useStyle()
    
    return(
        
        <div  className={classes.container}>
            {console.log('render')}
        <Card style={{margin:'5px'}}>
            
            <TextField
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'>
                Email
            </TextField>

        </Card>
        </div>

    )
}   

