import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './section/section10/App_10';
// import App from './App';
// import App from './section/router/App';
import MyCal from './section/training/calculate/MyCal';
import R_oute from './section/router/App'
// import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <R_oute></R_oute> */}
    {/* <App /> */}
    {/* <MyCal></MyCal> */}
    {/* <Calculator></Calculator> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
