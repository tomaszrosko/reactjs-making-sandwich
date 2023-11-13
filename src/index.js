import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import Cart from './components/cart'
import {BrowserRouter, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const rootElement =
//   document.getElementById('root');
// const root =  createRoot(rootElement);
// root.render(Routing());

// ReactDOM.render(<Routing />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// serviceWorker.unregister()
