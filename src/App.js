import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {BrowserRouter} from "react-dom"
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';



const App = () => (
< BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <div class="container-fluid">
 

      
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/Dashboard" component={Dashboard} />
         
          <H2>Hello World</H2>
    
          </Switch>

    </div></div></BrowserRouter>
  );

  
  export default App;