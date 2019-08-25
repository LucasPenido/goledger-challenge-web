import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './containers/LoginPage/LoginPage';
import Header from './components/Header'
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes;
    this.props.isAuthenticated ?
    routes = (
      <div>
        <Header/>
        <Switch>
        </Switch>
      </div>
    ) :
    routes = (
      <Switch>
        <Route path='/' exact component={LoginPage} />
      </Switch>
    )

    return (
      <div>
        {routes}
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

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( App ));
