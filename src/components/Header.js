import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import './Header.css'

class Header extends Component {

  render () {
    return (
      <nav className="navbar navbar-light" >
        <a className="navbar-brand" href='/'>Pilots</a>
        <button className="btn btn-outline-dark my-2 my-sm-0" type="button" onClick={this.props.logout}>
          Logout
        </button>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect( null, mapDispatchToProps )( Header ) ;
