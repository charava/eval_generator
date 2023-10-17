import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Eleventh_Fall_Eval_Page from './pages/Fall_11_page.js';
import reportWebVitals from './reportWebVitals';

// HOW TO RUN THIS REACT APP...
// make sure to have node.js installed
// then make sure to do 'npm install react-scripts'
// then do 'npm start' to run it on port localhost:3000

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
