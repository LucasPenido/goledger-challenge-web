import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <div className='container'>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputUserName">User Name</label>
            <input type="text" className="form-control" id="exampleInputUserName" aria-describedby="emailHelp" placeholder="Enter User Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          </form>
      </div>
    );
  }

}

export default LoginPage;
