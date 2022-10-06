import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
//import Home from './screen/Home'
import Login from './screen/Login'
import About from './screen/About'
import Home from './class/Home'

function App() {
  return (
    <Router>
      <main>
        <Route path='/login' componenet={Login} exact></Route>
        <Route path='/'  component={Home} exact></Route>
        <Route path='/about' component ={About} exact></Route>
      </main>
    </Router>
  );
}

export default App;
