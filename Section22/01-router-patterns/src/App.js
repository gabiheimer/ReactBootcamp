import React from 'react';
import './App.css';
import Food from './Food';
import {Route, Switch} from 'react-router-dom';
import Meal from './Meal';
import FoodSearch from './FoodSearch';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => <FoodSearch {...routeProps}/>}
        />
        <Route 
          exact 
          path='/food/:name' 
          render={(routeProps) => <Food {...routeProps} />}
        />
        <Route 
          exact 
          path='/food/:name' 
          component={Food}
        />
        <Route
          exact
          path='/food/:food/drink/:drink'
          component={Meal}
        />
        <Route render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
