import {NOTES_ADD_REQUEST, NOTES_ADD_SUCCESS, 
    NOTES_DELETE_REQUEST,NOTES_DELETE_SUCCESS,
    NOTES_FETCH_REQUEST,NOTES_FETCH_SUCCESS,
LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS} from '../constants'

export const getNotesReducer=(state={notes:[]},data)=>{
    switch (data.type){

    case NOTES_FETCH_REQUEST:
        return {loading:true,
        }
    case NOTES_FETCH_SUCCESS:
        return{
            loading:false,
            
            notes:data.payload
        }
    default:
        return state    

    }

}  


export const addNoteReducer=(state={},data)=>{
    switch (data.type){
        case NOTES_ADD_REQUEST:
            return{loading:true}
        case NOTES_ADD_SUCCESS:
            return{
                loading:false,
                id:data.payload
            }
        default:
            return state
    }
}
export const loginReducer= (state={},data)=>{
    switch (data.type){
        case LOGIN_USER_REQUEST:
            return{
                loading:true
            }
        case LOGIN_USER_SUCCESS:
            return {
                loading:false,
                token:data.payload
            }

        default:
            return state
    }
}