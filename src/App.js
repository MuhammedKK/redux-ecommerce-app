import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import Products from './components/Products';
// import AllProducts from './components/AllProducts';
import ProductDetailes from './components/ProductDetails' 

const App = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route  path='/' element={<Products />} />
          <Route  path='/product/:id' element={<ProductDetailes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
