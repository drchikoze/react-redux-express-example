import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainView from './views/MainView/MainView.js';
import WelcomePage from './views/WelcomePage/WelcomePage.js';
import Login from './views/Login/Login.js';
import SignUp from './views/SignUp/SignUp.js';
import Profile from './views/Profile/Profile.js';


export const getRoutes = (store) => {
  function requireAuth(nextState, replaceState) {
    // Now you can access the store object here.
    const state = store.getState();
    console.log(state);
    // if (!state.user.isAuthenticated) {
    //   // Not authenticated, redirect to login.
    //   replaceState({ nextPathname: nextState.location.pathname }, '/login');
    // }      <IndexRoute component={WelcomePage} />
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
