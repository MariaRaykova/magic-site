import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Router from "./Router"

import './index.css';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
  <App>
    <Router />
  </App>
</BrowserRouter>,
  document.getElementById('root')
);

