import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import RandomNumber from './RandomNumber'

class App extends Component{
  render(){
    return (
      <div className = 'App'>
        <RandomNumber/>
      </div>
    )}
}

export default App;
