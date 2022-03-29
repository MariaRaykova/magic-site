import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Router from './Router'
import './utils/i18n';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Router />
    </App>
  </BrowserRouter>,
  document.getElementById('root'),
);
