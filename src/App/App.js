import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';

// import Fish from '../components/Fish/Fish';
import Home from '../components/Home/Home';
import Inventory from '../components/Inventory/Inventory';
// import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
// import New from '../components/New/New';
// import Order from '../components/Order/Order';
// import OrderSpa from '../components/OrderSpa/OrderSpa';
// import Register from '../components/Register/Register';
// import SingleOrder from '../components/SingleOrder/SingleOrder';

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{pathname: '/login', state: {from: props.location}}}
          />
        )
      }

    />
  );
};

class App extends Component {
  state = {
    authed: false,
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <PrivateRoute
                    path="/inventory"
                    authed={this.state.authed}
                    component={Inventory}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
