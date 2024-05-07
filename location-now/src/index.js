import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';




const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>

    <App />{' '}

  </StrictMode>
);
