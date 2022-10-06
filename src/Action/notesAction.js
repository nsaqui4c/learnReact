import {NOTES_ADD_REQUEST, NOTES_ADD_SUCCESS, 
  NOTES_DELETE_REQUEST,NOTES_DELETE_SUCCESS,
  NOTES_FETCH_REQUEST,NOTES_FETCH_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS} from '../constants'
import axios from 'axios'



export const getNotesAction=async(dispatch)=>{
    
    dispatch({type:NOTES_FETCH_REQUEST})
    const response= await axios.get('http://localhost:5000/notes/getNotes')
   
    dispatch({type:NOTES_FETCH_SUCCESS,
            payload:response.data})
    
}

export const addNoteAction=(subject,desc)=>async(dispatch)=>{
    
    dispatch({
        type: NOTES_ADD_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://localhost:5000/notes/addNote",
        { subject,desc },
        config
      );
      
  
      dispatch({
        type: NOTES_ADD_SUCCESS,
        payload: data,
      });

}


export const noteDeleteAction=(id)=> async(dispatch)=>{
  dispatch({type:NOTES_DELETE_REQUEST})

  const config={
    headers:{
      "Content-type":"application/json"
    }
  }
  const url=`http://localhost:5000/notes/deleteNote/${id}`
  console.log(url)
  const {data} = axios.delete(url,
  config)

  dispatch({
    type:NOTES_DELETE_SUCCESS,
    payload:data
  })


}


export const loginAction= (email,pass)=>async(dispatch)=>{
  dispatch({type:LOGIN_USER_REQUEST})
  console.log(email,pass)

  const url=`http://localhost:5000/notes/login`
  const config = {
    headers:{
      "content-type": "Application/json"
    }
  }
  const {data}=await axios.post(url,config,{email,pass})
  localStorage.setItem('userLogin',JSON.stringify({loading:false,token:data}))
  dispatch({
    type:LOGIN_USER_SUCCESS,
    payload:data
  })
  
  



}