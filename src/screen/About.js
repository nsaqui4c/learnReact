import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {loginAction} from '../Action/notesAction'
import {makeStyles, Card,TextField,CardContent, Button} from '@material-ui/core'


export default function About({history,location,match}){
    const useStyle = makeStyles((theme)=>({
        container:{
            width:'50%',
            height:'50vh',
            margin:'auto',
            marginTop:'100px',
            justifyContent:'center',
            backgroundColor:'grey',
            
        }
        
    }))
    const dispatch= useDispatch()
    const login=(e)=>{
        e.preventDefault()
        dispatch(loginAction(email,password))

        
    }
    const [email , setEmail]= useState('')
    const [password, setPassword]= useState('')
    const classes=useStyle()
    
    return(
        
        <div  className={classes.container}>
           
        <Card style={{margin:'30px'}}>
        
            <form  onSubmit={(e)=>login(e)}>
            <CardContent>
            <TextField
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'>
                Email
            </TextField>
            </CardContent>

            <CardContent>

            <TextField
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Password'>
                Password
            </TextField>
            </CardContent>

            <Button type='submit' >Login</Button>
            </form>

        </Card>
        </div>

    )
}   
