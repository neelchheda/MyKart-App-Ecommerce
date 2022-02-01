import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import "antd/dist/antd.css";
import {createStore} from 'redux';
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);



