import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import LoginPage from './containers/LoginPage/LoginPage';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
  
  render() {
    return (
      <div className="App">
        <LoginPage/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
