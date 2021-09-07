import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import SignIn from './SignIn';
import Dashboard from './Dashboard';



const App = () => (
<Router>
    <div className="App">
    <div class="container-fluid">
 

      
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/Dashboard" component={Dashboard} />
         
          
    
          </Switch>

    </div></div></Router>
  );

  
  export default App;