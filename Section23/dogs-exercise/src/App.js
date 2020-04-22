import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dogs from './Dogs';
import tubby from './tubby.jpeg';
import hazel from './hazel.jpeg';
import whiskey from './whiskey.jpg';
import DogDetails from './DogDetails';
import NavBar from './Navbar';

class App extends Component{
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        src: tubby,
        age: 4,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }

  render(){
    return(
      <div>
        <NavBar dogs={this.props.dogs}/>
        <Switch>
          <Route exact path='/dogs' render={(routeProps) => <Dogs {...routeProps} dogs={this.props.dogs} />} />
          <Route exact path='/dogs/:name' render={(routeProps) => <DogDetails {...routeProps} dogs={this.props.dogs} />} />
          <Redirect to='/dogs' />
        </Switch>
      </div>
    );
  }
}

export default App;
