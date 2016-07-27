const initialState = {
  auth: {

  }
}
let authReducer = function(auth = initialState, action) {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
      return Object.assign({}, auth, {
        isLogining: true
      })
    case 'AUTH_LOGIN_SUCCESS':
      return Object.assign({}, auth, {
        isLoginedIn: true,
        isLogining: false,
        errorMsg: null,
        user: {
          id: action.user.id,
          email: action.user.email,
          photo: action.user.photo,
          provider: action.user.provider
        }
      })
    case 'AUTH_LOGIN_FAILED':
      return Object.assign({}, auth, {
        isLogining: true
      })
    case 'AUTH_LOGIN_VIA_TOKEN_REQUEST':
      return Object.assign({}, auth, {
        isLogining: true,
        isLoginedIn: false,
        errorMsg: action.message,
        user: null
      })
    case 'AUTH_LOGIN_VIA_TOKEN_SUCCESS':
      return Object.assign({}, auth, {
        isLogining: false,
        isLoginedIn: true,
        errorMsg: null,
        user: {
          id: action.user.id,
          email: action.user.email,
          photo: action.user.photo,
          provider: action.user.provider
        }
      })
    case 'AUTH_LOGIN_VIA_TOKEN_FAILED':
      return Object.assign({}, auth, {
        isLogining: false,
        isLoginedIn: false,
        errorMsg: action.message,
        user: null
      })
    case 'LOGOUT_REQUEST':
      return Object.assign({}, auth, {
        isLogining: true,
        isLoginedIn: true,
      })
    case 'LOGOUT_FAILED':
      return Object.assign({}, auth, {
        isLogining: false,
        isLoginedIn: true,
        errorMsg: action.message,
      })
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, auth, {
        isLogining: false,
        isLoginedIn: false,
        user: null
      })
      // return {
      //   ...auth,
      //   message: null,
      //   isWaiting: true,
      // }
  //   case 'AUTH_LOGIN_FAILED':
  //     return {
  //       // ...auth,
  //       // message: null,
  //       // authenticated: true,
  //       // isWaiting: false,
  //     }
  //   case 'AUTH_LOGIN_SUCCESS':
  //     return {
  //       // ...auth,
  //       // isWaiting: false,
  //       // authenticated: false,
  //       // message: action.message
  //     }
    default:
      return auth
  }
}
export default authReducer
