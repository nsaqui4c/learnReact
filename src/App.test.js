import React from 'react'
import { render, screen,fireEvent, getByTestId, getByLabelText, getByTitle, queryByTestId} from '@testing-library/react';
import { createStore } from "redux";
import {Provider} from 'react-redux'
import App from './App';

import {getNotesReducer,addNoteReducer,loginReducer} from './reducer/notesReducer'


import Home from './screen/Home'
import Notes from './screen/Notes'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('Testing home component',()=>{
  
  beforeEach(done => {
    var stringified = JSON.stringify({loading:false,token:'data'});
    const initialState={getNotes:{notes:'',loading:false},login:stringified}
    const store = createStore(getNotesReducer,initialState);
    const Wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    )
     render(<Home/>, { wrapper: Wrapper });
    done();
  });
  
  
  
    test('Header should be present',()=>{     
    
      const header= screen.getByTestId('header')
      expect(header.textContent).toBe('WELCOME TO NOTE TAKING APP')
  
    })

    test('add button is present',()=>{

      const addBtn=screen.getByTestId('add-btn')
      expect(addBtn).toBeInTheDocument()
    })


    test('clicking add button show dialog',()=>{
      const addBtn=screen.getByTestId('add-btn')
      fireEvent.click(addBtn)

      const addDialog=screen.getByTitle('form-dialog-title')
      expect(addDialog).toBeInTheDocument()
    })


  

})


describe('Testing Notes component',()=>{
  let noteComp=null
  beforeEach(()=>{
    
    const note={
      id:1,
      subject:'some note',
      data:'there are some data present in this note',
    }

    noteComp=render( <Notes note={note}/>)
  })

  test('note is rendeing',()=>{
    const noteCard=screen.getByTestId(/note-[0-9]+/)
    expect(noteCard).toBeInTheDocument()
  })

  test("click on note open it",()=>{
    const noteCard=screen.getByTestId(/note-[0-9]+/)
    fireEvent.click(noteCard)
    const noteData=screen.queryByTestId('note-data')
   // expect((screen.queryByTestId('note-data').attributes().in).toBe(true))
    expect(noteData.attributes).toBe(true)
  })
})

 