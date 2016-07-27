import { combineReducers } from 'redux'
import auth from './authReducer.js'
import todos from './todoReducer.js'

const rootReducer = combineReducers({
  auth,
  todos
})


export default rootReducer
