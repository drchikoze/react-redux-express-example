import { combineReducers } from 'redux'
import auth from './authReducer.js'
// import visual from './visualReducer.js'

const rootReducer = combineReducers({
  auth
  // visual
})

// let rootReducer = function(state, action) {
//   switch (action.type) {
//     case 'TOGGLE_APP_BAR':
//     return Object.assign({}, state, {
//       open: !state.open
//     })
//     default:
//       return state;
//   }
// }

export default rootReducer
