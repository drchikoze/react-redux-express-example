import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

const state = {
  auth: {
    isLoginedIn: false,
    user: null
  }
}
export default function configureStore(initialState = state) {
  const store = finalCreateStore(rootReducer, initialState)
  return store;
}
