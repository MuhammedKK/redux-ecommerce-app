import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' Component={Products} />
          <Route exact path='/products/:id' Component={ProductDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
