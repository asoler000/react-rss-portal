import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './assets/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/js/myscripts";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/mystyles.css'




ReactDOM.render(
< BrowserRouter basename={process.env.PUBLIC_URL} >
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
