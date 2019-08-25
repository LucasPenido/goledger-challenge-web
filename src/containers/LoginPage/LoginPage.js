import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

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
      <div className='container'>
        <form onSubmit={ this.submitHandler }>
          <div className='form-group'>
            <label htmlFor='exampleInputUserName'>User Name</label>
            <input
              placeholder='User name'
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
              placeholder='Password'
              className='form-control '
              key='password'
              type='password'
              defaultValue={ this.state.password }
              autoComplete='new-password'
              onChange={( event ) => this.inputChangedHandler( event, 'password' )} required />
          </div>
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
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
