import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';

class App extends Component{
  getPalette(id){
    return generatePalette(seedColors.find(p => p.id === id));
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={() =>  <PaletteList palettes={seedColors}/>}/>
          <Route
            exact 
            path='/palette/:id' 
            render={
              (routeProps) => <Palette palette={this.getPalette(routeProps.match.params.id)} />
            }
          />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[2])}/> */}
      </div>
    );
  }
}

export default App;
