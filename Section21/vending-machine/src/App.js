import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Sardines from "./Sardines";
import Soda from "./Soda";
import Chips from "./Chips";

function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName='active-link' className='link' to = '/'>VENDING MACHINE</NavLink>
        <NavLink exact activeClassName='active-link' className='link' to = '/soda'>SODA</NavLink>
        <NavLink exact activeClassName='active-link' className='link' to = '/chips'>CHIPS</NavLink>
        <NavLink exact activeClassName='active-link' className='link' to = '/sardines'>SARDINES</NavLink>
      </nav>
      <Switch>
          <Route exact path='/' component={VendingMachine}/>
          <Route exact path='/sardines' component={Sardines}/>
          <Route exact path='/soda' component={Soda}/>
          <Route exact path='/chips' component={Chips}/>
      </Switch>
    </div>
  );
}

export default App;
