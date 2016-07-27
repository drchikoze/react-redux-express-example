import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainView from './views/MainView/MainView.js';
import WelcomePage from './views/WelcomePage/WelcomePage.js';
import Login from './views/Login/Login.js';
import SignUp from './views/SignUp/SignUp.js';
import Profile from './views/Profile/Profile.js';


export const getRoutes = (store) => {
  function requireAuth(nextState, replaceState) {
    const state = store.getState();
    if (!state.auth.isLoginedIn) {
      // Not authenticated, redirect to login.
      replaceState({ nextPathname: nextState.location.pathname }, '/login');
    }
  }

  return (
    <Route path="/" component={MainView}>
      <IndexRoute component={WelcomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} onEnter={requireAuth}/>
    </Route>
  )
}
