import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      palettes: seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.getPalette = this.getPalette.bind(this);
  }

  getPalette(id){
    return generatePalette(this.state.palettes.find(p => p.id === id));
  }

  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]});
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette}/>} />
          <Route exact path='/' render={(routeProps) =>  <PaletteList {...routeProps} palettes={this.state.palettes}/>}/>
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
