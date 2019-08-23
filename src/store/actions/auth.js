import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, username) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    username
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      username,
      password
    };
    let url = 'http://ec2-18-223-158-118.us-east-2.compute.amazonaws.com:3000/api/login';
    axios.post(url, authData)
    .then(response => {
      localStorage.setItem('token', response.data);
      localStorage.setItem('username', username);
      dispatch(authSuccess(response.data, username));
    })
    .catch(err => {
      dispatch(authFail(err.response.data));
    });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const username = localStorage.getItem('username');
      dispatch(authSuccess(token, username));
    }
  };
};
