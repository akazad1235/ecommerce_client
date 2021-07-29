import React from 'react';
import './App.css';




import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductList from './Pages/ProductList';
import CartList from './Pages/CartList';
import PageNotFound from './Pages/PageNotFound';
import { useState } from 'react';
import { createContext } from 'react';

export const cartContext = createContext();

function App() {
   const[cartCount, setCartCount] =  useState([1]); 
   const [addToCart, setAddToCart] = useState([])
   const [cartItemQty, setCartItemQty] = useState(0)

  return (
    <cartContext.Provider value={[cartCount, setCartCount, addToCart, setAddToCart,cartItemQty, setCartItemQty]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
         <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/details/:slug">
            <ProductDetailsPage />
        </Route>
        <Route path="/product/:type">
              <ProductList />
          </Route>
        <Route path="/cartList">
              <CartList />
        </Route>

        <Route path="*">
            <PageNotFound />
        </Route>
     </Switch>  
    </Router>
    </cartContext.Provider>

  );
}

export default App;
