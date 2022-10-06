import React ,{useEffect, useState,useMemo}from 'react'

//////////////////////////////////////////////////////
import {makeStyles} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//////////////////////////////////////////////////////////

import {useDispatch,useSelector} from 'react-redux'
import {getNotesAction,addNoteAction,noteDeleteAction} from '../Action/notesAction'
import Notes from './Notes'

export default function Home({history}){
    const useStyle=makeStyles((theme)=>
    ({ 

        header:{
            color:'white',
            backgroundColor:'green',   
            paddingTop:'2px',
            paddingBottom:'2px'     ,
            textAlign:'center',
            marginBottom:'20px'
           
               
        },
        container:{
            marginLeft:'10%',
            marginRight:'10%',
            [theme.breakpoints.down('sm')]:{
               marginLeft:'1px',
               marginRight:'1px', 
            },
            
           
        },
        inrow:{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            '&:hover': {
                cursor:'pointer'
             },
            }

    }))

    const [open, setOpen] = React.useState(false);
    const[sub,setSub]=useState('')
    const[des,setDes]=useState('')
    const dispatch= useDispatch()

    const addNote=(e)=>{
        e.preventDefault()
        dispatch(addNoteAction(sub,des))
        dispatch(getNotesAction)
        setDes('')
        setSub('')
        handleClose()
    }
    const deleteNote=(e,id)=>{
      e.stopPropagation()
      
      dispatch(noteDeleteAction(id))
      dispatch(getNotesAction)

      console.log(`delete ${id}`)

    }
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const{notes,loading}=useSelector((state)=>state.getNotes)
    const logs= JSON.parse(useSelector((state)=>state.login))
    
    const classes=useStyle()
    
  
    useEffect(()=>{
      if(!logs.token)
      history.push('/about')
      console.log(logs.token)
        
        if(loading===false){
          console.log('data already loaded')
        }
        else
        dispatch(getNotesAction)
        console.log('dispatch is called')

    },[loading])

    
    
    return(
       
        <div className={classes.container}>
          {console.log('rendering')}
            <div className={`${classes.header} ${classes.textCenter}`} data-testid="header">
                <p>WELCOME TO NOTE TAKING APP</p>
            </div>
            <div className={classes.inrow} onClick={handleClickOpen} data-testid="add-btn">
                <AddCircleIcon style={{ fontSize: 50 }}/>
                <p>ADD NEW NOTE</p>
            </div>
            <div>
                {notes?notes.map((note)=>( <Notes key={note.id} note={note} deleteNote={deleteNote} />)):<p>Loading</p>}    
            </div> 


            <button onClick={()=>history.push('/about')}>Login</button>




        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" title='form-dialog-title'>Create new Note</DialogTitle>
        <form onSubmit={addNote}>
        <DialogContent>
       
          <TextField
            autoFocus
            margin="dense"
            id="subject"
            label="Subject"
            type="input"
            value={sub}
            onChange={(e)=>{setSub(e.target.value)}}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            id="data"
            label="Data"
            type="text"
            rows='3'
            variant='outlined'
            value={des}
            onChange={(e)=>{setDes(e.target.value)}}
            required
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  type='submit' color="primary">
            Add
          </Button>
        </DialogActions>
        </form>
      </Dialog>  

        </div>
    )
}