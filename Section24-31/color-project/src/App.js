import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

import generatePalette from './colorHelpers';
import seedColors from './seedColors';

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
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              classNames='page'
              timeout={300}
              key={location.key}
            >
              <Switch location={location}>
                <Route 
                  exact 
                  path="/palette/new" 
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm 
                        {...routeProps} 
                        palettes={this.state.palettes} 
                        savePalette={this.savePalette}
                        />
                    </Page>
                  )} 
                />
                <Route 
                  exact 
                  path='/' 
                  render={(routeProps) =>  (
                    <Page>
                      <PaletteList 
                        {...routeProps} 
                        deletePalette={this.deletePalette} 
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact 
                  path='/palette/:id' 
                  render={(routeProps) => (
                    <Page>
                      <Palette 
                        palette={this.getPalette(routeProps.match.params.id)} 
                      />
                    </Page>
                  )}
                />
                <Route 
                  path='/palette/:paletteId/:colorId' 
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette 
                        palette={this.getPalette(routeProps.match.params.paletteId)}
                        colorId={routeProps.match.params.colorId}
                        {...routeProps}
                      />
                    </Page>
                  )} 
                />
                <Route
                  render={(routeProps) =>  (
                    <Page>
                      <PaletteList 
                        {...routeProps} 
                        deletePalette={this.deletePalette} 
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}></Route>
      </div>
    );
  }
}

export default App;
