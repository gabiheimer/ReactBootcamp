import React from 'react';
import './App.css';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithProps from './WiseSquareWithProps';
import ButtonList from './ButtonList';
import NumberList from './NumberList';

function App() {
  return (
    <div className='App'>
      <h1>React Events!</h1>
      <WiseSquare/>
      <AnnoyingForm/>
      <CopyDemo/>
      <WiseSquareWithProps/>
      <ButtonList/>
      <h1>Passing methods down to child!</h1>
      <NumberList/>
    </div>
  );
}

export default App;
