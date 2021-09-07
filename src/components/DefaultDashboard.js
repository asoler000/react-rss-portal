import React from 'react';
import { Component } from "react";
import {Redirect, Link } from 'react-router-dom';
import SearchFilterTop from './SearchFilterTop';
import ShowAndHide from './Prof';

const DefaultDashboard = () => (
    
  <div class="container">
  {/* <h1 class="page-header">Dashboard</h1> */}
  <div id="parent">Welcome to the Portal, John <div id="border"></div></div>

<ShowAndHide/>
  




 
            </div>
);

export default DefaultDashboard;