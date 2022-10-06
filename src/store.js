import {createStore,combineReducers,applyMiddleware} from 'redux'
import {getNotesReducer,addNoteReducer,loginReducer} from './reducer/notesReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk]
const initialState={login:localStorage.getItem('userLogin')}

const reducer= combineReducers({getNotes:getNotesReducer,addNote:addNoteReducer,login:loginReducer})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store