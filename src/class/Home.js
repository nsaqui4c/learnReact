import React from 'react'

/////////////////////////////////////////////////////
import {withStyles} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
//////////////////////////////////////////////////////////

import {connect} from 'react-redux'

import {getNotesAction,addNoteAction,noteDeleteAction} from '../Action/notesAction'
//import Notes from './Notes'


const useStyle=(theme)=>
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

})


 class Home extends React.Component{
     
        state={
            open:false,
            sub:'',
            des:'',
            notes:{}
        }  

    
        componentDidMount(){
           this.props.getNotesAction()
           console.log('didmount')
           
        }

    render(){
       


        // const dispatch= useDispatch()
        console.log('render')
        const addNote=(e)=>{
            e.preventDefault()
            this.props.addNoteAction(this.sub,this.des)
            this.props.getNotesAction()
            this.setState({des:'',sub:''})            
            handleClose()
        }
        const deleteNote=(e,id)=>{
          e.stopPropagation()
          
          this.props.noteDeleteAction(id)
          this.props.getNotesAction()
    
          console.log(`delete ${id}`)
    
        }
        
    
        const handleClickOpen = () => {
            
            this.setState({open:true})
            
         
        };
      
        const handleClose = () => {
          this.setState({open:false})
        };
      
        // const{notes,loading}=useSelector((state)=>state.getNotes)
        // const logs= JSON.parse(useSelector((state)=>state.login))
       
        
        const {classes}=this.props
        const {history}=this.props



        return(<div className={classes.container}>
            
              <div className={`${classes.header} ${classes.textCenter}`}>
                  <p>WELCOME TO NOTE TAKING APP</p>
              </div>
              <div className={classes.inrow} onClick={handleClickOpen}>
                  <AddCircleIcon style={{ fontSize: 50 }}/>
                  <p>ADD NEW NOTE</p>
              </div>
              <div>
                  {this.props.notes?this.props.notes.map(note=>(<p key={note.id}>{note.id}</p>)):<p>Loading..</p>}
                  {/* {notes?notes.map((note)=>( <Notes key={note.id} note={note} deleteNote={deleteNote} />)):<p>Loading</p>}     */}
              </div> 
  
  
              <button onClick={()=>history.push('/about')}>Login</button>
  
  
  
  
          <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create new Note</DialogTitle>
          <form onSubmit={this.addNote}>
          <DialogContent>
         
            <TextField
              autoFocus
              margin="dense"
              id="subject"
              label="Subject"
              type="input"
              value={this.sub}
              onChange={(e)=>this.setState({sub:e.target.value})}
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
              value={this.des}
              onChange={(e)=>this.setState({des:e.target.value})}
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
  
          </div>)
        
    }
}

const mapStateToProps = state=>({
    notes:state.getNotes.notes,
    logs:state.login
})
const mapDispatchToProps=(dispatch )=>{
    return{
        getNotesAction:()=>dispatch(getNotesAction),
         addNoteAction:()=>dispatch(addNoteAction),
         noteDeleteAction:()=>dispatch(noteDeleteAction)

    }
    // return bindActionCreators({getNotesAction,addNoteAction},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyle)(Home))