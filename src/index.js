import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { ApiContextProvider } from './ApiContext';

ReactDOM.render(
  <BrowserRouter>
    <ApiContextProvider>
    <App />
    </ApiContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


