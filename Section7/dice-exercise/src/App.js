import React, {Component} from 'react';
import './App.css';
import RollDice from './RollDice';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <h1 id='grad1'>Dice Roller!</h1>
        <RollDice qtt={20} />
      </div>
    );
  }
}

export default App;
