import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import NavigationBox from './components/NavigationBox';
import Bg from './components/Bg'
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>

    <Navbar />

    <NavigationBox />
    <Bg />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
