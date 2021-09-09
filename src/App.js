import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';




function App() {
  return (
<Router>
    <div className="App">
    <div class="container-fluid">
 
   
      
          <Switch>
          <Route exact path="/react-rss-portal" component={SignIn} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/react-rss-portal/Dashboard" component={Dashboard} />
     
       
    
          </Switch>

    </div></div></Router>
  );
};

export default App;