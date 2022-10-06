import React,{useState} from 'react'
import {makeStyles,Card,Collapse} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ChangeColor from '../HOC/ChangeColor'


function Notes({note,deleteNote}){


    const useStyle=makeStyles((theme)=>({
        marginleft:{
            marginLeft:'15px'
        },
        inrow:{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            '&:hover': {
                cursor:'pointer'
             },
            }

    }))

    const [expanded, setExpanded]=useState(false)
    
    const expanHandler=()=>{
        setExpanded(!expanded)
    }

    
    const classes=useStyle()
    return(
        <Card style={{margin:'5px'}} onClick={(e)=>expanHandler(e)} data-testid={`note-${note.id}`}>  
        <div className={classes.inrow}> 
        <h4 className={classes.marginleft}>{note.subject}</h4>
        <DeleteForeverIcon style={{padding:'10px'}} onClick={(e)=>deleteNote(e,note.id)} />
        </div>     
        <Collapse in={expanded}>
            <p className={classes.marginleft} data-testid='note-data'>{note.data}</p>
        </Collapse>
        
        </Card>
    )
}

export default ChangeColor(Notes)