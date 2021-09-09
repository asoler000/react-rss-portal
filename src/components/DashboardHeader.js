import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import SearchFilterTop from './SearchFilterTop';
import SignIn from '../SignIn'


const DashboardHeader = () => (
    
     
  <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" >   <img src={logo} alt="logo" /></a>
  <div className="col-md-6 hidden-mobile">  <SearchFilterTop/></div>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <ul className="navbar-nav px-3">
    <li className="nav-item text-nowrap">
    
      <a className="nav-link p-2" href="# " target="_blank" rel="noopener" >
      <Link to="/react-rss-portal/SignIn">Sign Out</Link>
       </a>
    </li>
  </ul>
</nav>

);

export default DashboardHeader;