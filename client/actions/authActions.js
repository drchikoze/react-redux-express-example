import xhr from 'xhr'
import { browserHistory } from 'react-router';

export function login(user) {
  return dispatch => {
    dispatch(requestLogin())
    return xhr.post('/login',
      {
        body: JSON.stringify(user), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedLogin(message));
          }
          if ( resp.statusCode == 400 ) {
            var message = JSON.parse(resp.body).message
            dispatch(failedLogin(message));
          }
          if ( resp.statusCode == 200 ) {
            // cookie.save('username', user.email)
            // console.log(JSON.parse(resp.body));
            let user = JSON.parse(resp.body);
            dispatch(receiveLogin(user));
            sessionStorage.setItem('token', user.id);
            browserHistory.push('/profile');
          }
       }
     )
  }
}

function requestLogin() {
    return {
      type: 'AUTH_LOGIN_REQUEST'
    }
}

function failedLogin(message) {
  return {
    type: 'AUTH_LOGIN_FAILED',
    message: message
  }
}

function receiveLogin(user) {
  return {
    type: 'AUTH_LOGIN_SUCCESS',
    user: user
  }
}

export function loginViaToken(token) {
  return dispatch => {
    dispatch(requestLoginViaToken())
    console.log(token);
    return xhr.post('/loginViaToken',
      {
        body: JSON.stringify({token: token}), headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
      },
       function(err, resp) {
          if(err) {
            console.log(err);
            dispatch(failedLoginViaToken(err));
          }
          if ( resp.statusCode == 400 ) {
            var message = JSON.parse(resp.body).message
            dispatch(failedLoginViaToken(message));
          }
          if ( resp.statusCode == 200 ) {
            let user = JSON.parse(resp.body);
            dispatch(receiveLoginViaToken(user));
          }
       }
     )
  }
}

function requestLoginViaToken() {
  return {
    type: 'AUTH_LOGIN_VIA_TOKEN_REQUEST'
  }
}

function failedLoginViaToken(message) {
  return {
    type: 'AUTH_LOGIN_VIA_TOKEN_FAILED',
    message: message
  }
}

function receiveLoginViaToken(user) {
  return {
    type: 'AUTH_LOGIN_VIA_TOKEN_SUCCESS',
    user: user
  }
}

export function logOut() {
  return dispatch => {
    dispatch(requestLogOut())
    return xhr.get('/logout',
       function(err, resp) {
          if(err) {
            dispatch(failedLogOut(err));
          }
          if ( resp.statusCode == 400 ) {
            var message = JSON.parse(resp.body).message
            dispatch(failedLogOut(message));
          }
          if ( resp.statusCode == 200 ) {
            let user = JSON.parse(resp.body);
            dispatch(receiveLogOut(user));
            sessionStorage.removeItem('token');

          }
       }
    )
  }
}


function requestLogOut() {
  return {
    type: 'LOGOUT_REQUEST'
  }
}

function failedLogOut(message) {
  return {
    type: 'LOGOUT_FAILED',
    message: message
  }
}

function receiveLogOut() {
  return {
    type: 'LOGOUT_SUCCESS',
  }
}
