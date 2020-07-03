import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import './App.css';
import SimpleFormHooks from './SimpleFormHooks';
import Clicker from './Clicker';
import SwMovies from './SwMovies';

function App() {
  return (
    <div className="App">
      <CounterClass/>
      <CounterHooks/>
      <Toggler/>
      <SimpleFormHooks/>
      <Clicker/>
      <SwMovies/>
    </div>
  );
}

export default App;
