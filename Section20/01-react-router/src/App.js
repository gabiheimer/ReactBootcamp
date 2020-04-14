import React, { Component } from 'react';
import './App.css';
import FakeRoute from './FakeRoute';
import {Route, Switch, NavLink} from 'react-router-dom';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>

class App extends Component{
  render() {
    return (
      <div className="App">
        {/* hacked router */}
        {/* <FakeRoute/> */}

        <nav>
          {/* 
          <Link to='/dog'>Dog</Link>
          <Link to='/Contact'>Contact</Link>
          <Link to='/'>About</Link> */}

          <NavLink exact activeClassName='active-link' to='/dog/r'>Dog(r)</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/c'>Dog(c)</NavLink>
          <NavLink exact activeClassName='active-link' to='/Contact'>Contact</NavLink>
          <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
        </nav>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/dog/c' component={() => <Dog name='Muffins'/>}/>
          <Route exact path='/dog/r' render={() => <Dog name='Biscuits'/>}/>
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/dog/hater' component={Hater}/>
        </Switch>
      </div>
    );
  }
}

export default App;
