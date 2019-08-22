import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputUserName'>User Name</label>
            <input
              placeholder='User name'
              className='form-control'
              key='userName'
              type='text'
              defaultValue={ this.state.userName }
              autoComplete='new-password'
              onChange={( event ) => this.inputChangedHandler( event, 'userName' )} required />
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
    )
  }

}

export default LoginPage
