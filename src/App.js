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








function App() {

  return (

    <Router>
      <div>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="*">
          <PageNotFound/>
        </Route> */}
         <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/details">
            <ProductDetailsPage />
        </Route>
        <Route path="/productlist">
              <ProductList />
          </Route>
        <Route path="/cartList">
              <CartList />
        </Route>
        <Route path="*">
            <PageNotFound />
        </Route>
     </Switch> 
     </div>
    </Router>

  );
}

export default App;
