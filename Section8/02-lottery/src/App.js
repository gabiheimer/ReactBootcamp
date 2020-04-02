import React, {Component} from 'react';
import './App.css';
import Lottery from './Lottery';

class App extends Component{
  render(){
    return <Lottery title='Lotto' numBalls={10} maxNum={50}/>
  }
}

export default App;
