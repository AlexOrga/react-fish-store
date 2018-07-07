import React from 'react';
import { Link } from 'react-router-dom';

import authRequests from '../../FirebaseRequests/auth';
import './Register.css';

class Register extends React.Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  }

  registerClickEvent = (e) => {
    const {user} = this.state;
    e.preventDefault();
    authRequests.registerUser(user)
      .then(() => {
        this.props.history.push('/orders');
      })
      .catch((err) => {
        console.error('error registering user', err);
      });
  }

  emailChange = (e) => {
    const tempUser = {...this.state.user};
    tempUser.email = e.target.value;
    this.setState({user: tempUser});
  }

  passwordChange = (e) => {
    const tempUser = {...this.state.user};
    tempUser.password = e.target.value;
    this.setState({user: tempUser});
  }

  render () {
    const { user } = this.state;
    return (
      <div className="Register">
        <div id="login-form">
          <h1 className="text-center">Register</h1>
          <form className="form-horizontal col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-sm-2 control-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                  value={user.email}
                  onChange={this.emailChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-sm-2 control-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  value={user.password}
                  onChange={this.passwordChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10 text-center">
                <Link to="/login">Need to Login?</Link>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button
                  type="submit"
                  className="btn btn-default col-xs-12"
                  onClick={this.registerClickEvent}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
