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
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.getPalette = this.getPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  getPalette(id){
    return generatePalette(this.state.palettes.find(p => p.id === id));
  }

  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]},  this.syncLocalStorage);
  }

  deletePalette(id){
    this.setState((st) => ({
      palettes: st.palettes.filter(palette => palette.id !== id)
    }), this.syncLocalStorage);
  }

  syncLocalStorage(){
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render(){
    return(
      <div style={{height: '100%'}}>
        <Switch>
          <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette}/>} />
          <Route exact path='/' render={(routeProps) =>  <PaletteList {...routeProps} deletePalette={this.deletePalette} palettes={this.state.palettes}/>}/>
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
