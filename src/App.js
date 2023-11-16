import React, {useState} from "react";
import logo from './logo.svg';
import './App.scss';
import Make from "./components/make";
import Order from "./components/order";
import {BrowserRouter, Route} from "react-router-dom";
import Cart from "./components/cart";

// function Routing() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/" component={App} />
//       <Route exact path="/cart" component={Cart} />
//     </BrowserRouter>
//   )
// }

function App() {
    const [sandwich, setSandwich] = useState(null)

    const getSandwich = (sandwich) => {
        setSandwich(sandwich);
    }

  return (
   <div className='App'>
     <header className="header">
        <Cart />
     </header>
       <div className='container'>
           <Make getSandwich={getSandwich} />
           <Order newSandwich={sandwich} />
       </div>
   </div>
  );
}

export default App;
