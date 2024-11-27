import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Add index.css back
import App from './App';
import './index.css'; // Add your global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
