import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

class App extends Component{
  getPalette(id){
    return generatePalette(seedColors.find(p => p.id === id));
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' render={(routeProps) =>  <PaletteList {...routeProps} palettes={seedColors}/>}/>
          <Route
            exact 
            path='/palette/:id' 
            render={
              (routeProps) => <Palette palette={this.getPalette(routeProps.match.params.id)} />
            }
          />
          <Route 
            path='/palette/:paletteId/:colorId' 
            render={(routeProps) => (
              <SingleColorPalette 
                palette={this.getPalette(routeProps.match.params.paletteId)}
                colorId={routeProps.match.params.colorId}
                {...routeProps}/>
            )} />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[2])}/> */}
      </div>
    );
  }
}

export default App;
