import React, { Component } from 'react'
import axios from 'axios'

class LoginPage extends Component {
  state = {
    userName: '',
    password: '',
    isSignup: true
  }

  submitHandler = ( event ) => {
    event.preventDefault()

    const body = {
      username: this.state.userName,
      password: this.state.password
    }

    axios.post('http://ec2-18-223-158-118.us-east-2.compute.amazonaws.com:3000/api/login',
    body).then(res => {

    })
  }

  inputChangedHandler = ( event, controlName ) => {
    this.setState( { [controlName]: event.target.value })
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
