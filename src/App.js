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
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CustomerVerify from './Pages/CustomerVerify';

export const cartContext = createContext();

function App() {
   const [addToCart, setAddToCart] = useState([])

  return (
    <cartContext.Provider value={[addToCart, setAddToCart]}>
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
        <Route path="/checkout">
              <Checkout />
        </Route>
        <Route path="/login">
              <Login />
        </Route>
        <Route path="/register">
              <Register />
        </Route>
        <Route path="/customer/verify">
              <CustomerVerify />
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
