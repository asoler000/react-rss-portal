import React from 'react';
import { Component } from "react";
import DashboardHeader from './components/DashboardHeader';
import DefaultDashboard from './components/DefaultDashboard';
import './assets/css/bootstrap.css';








export default class SignIn extends Component {
  
  render() {
      return (
  <div className="">
    <div className="row">
    <DashboardHeader/>

<DefaultDashboard/>

</div>


</div>
        );
      }
    
  }
  