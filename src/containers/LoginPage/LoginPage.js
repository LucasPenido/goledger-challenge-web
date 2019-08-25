import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import AirPlane from '../../images/aeroplane.png';

import './LoginPage.css';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  submitHandler = ( event ) => {
    event.preventDefault();
    this.props.onAuth( this.state.username, this.state.password );
  }

  inputChangedHandler = ( event, controlName ) => {
    this.setState( { [controlName]: event.target.value });
  }

  render() {
    return (
      <div className='App'>
        <div className="App__Aside">
            <img className="Logo" src={AirPlane} alt = "PilotsLogo" />
        </div>
        <div className='App__Form'>
          <div className='FormCenter'>
            <form onSubmit={ this.submitHandler }>
              <div className='form-group'>
                <label htmlFor='exampleInputUserName'>Username</label>
                <input
                  placeholder='username'
                  className='form-control'
                  key='username'
                  type='text'
                  defaultValue={ this.state.username }
                  autoComplete='new-password'
                  onChange={( event ) => this.inputChangedHandler( event, 'username' )} required />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputUserName'>Password</label>
                <input
                  placeholder='******'
                  className='form-control '
                  key='password'
                  type='password'
                  defaultValue={ this.state.password }
                  autoComplete='new-password'
                  onChange={( event ) => this.inputChangedHandler( event, 'password' )} required />
              </div>
              <button type='submit' className='FormField__Button'>Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: ( username, password ) => dispatch( actions.auth( username, password ) ),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage );
