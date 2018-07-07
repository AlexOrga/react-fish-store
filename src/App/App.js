import React, { Component } from 'react';
import './App.css';

import Fish from '../components/Fish/Fish';
import Home from '../components/Home/Home';
import Inventory from '../components/Inventory/Inventory';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import New from '../components/New/New';
import Order from '../components/Order/Order';
import OrderSpa from '../components/OrderSpa/OrderSpa';
import Register from '../components/Register/Register';
import SingleOrder from '../components/SingleOrder/SingleOrder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Fish />
        <Home />
        <Inventory />
        <Login />
        <Navbar />
        <New />
        <Order />
        <OrderSpa />
        <Register />
        <SingleOrder />
      </div>
    );
  }
}

export default App;
