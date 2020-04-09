import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Timer/>
        <ZenQuote/>
        <GithubUserInfo username='colt' />
        <GithubUserInfo username='facebook' />
      </div>
    );
  }
}

export default App;
