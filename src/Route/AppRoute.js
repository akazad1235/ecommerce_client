import React from 'react';
import Home from '../Pages/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AppRoute = () => {
   
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default AppRoute;