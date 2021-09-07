import React, { Component } from "react";
import {ReactComponent as ReactLogo} from '../src/logoBlack.svg';
import {Redirect, Link } from 'react-router-dom';


export default class SignIn extends Component {
  
  render() {
      return (
     
<div class="auth-wrapper ">
  <div class="auth-inner">
          <form class="form-signin">
             <ReactLogo />
              <h3>Sign In</h3>

              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email"  />
              </div>

              <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password"  />
              </div>

              <div className="form-group">
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1" >Remember me</label>
                  </div>
              </div>
<Link to="/Dashboard">
              <button type="submit" className="btn btn-primary btn-block" >Submit</button></Link>
              <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
              </p>
          </form>
          </div>
          </div>
        );
    }
  
}
