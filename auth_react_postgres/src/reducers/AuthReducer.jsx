import * as constant from '../actions/types';

const initialState = {
  isAuthenticated: false,
  error: null
};

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       localStorage.setItem("token", JSON.stringify(action.payload.token));
//       return {
//         ...state,
//         isAuthenticated: true,
//         token: action.payload.token
//       };
//     case "LOGOUT":
//       localStorage.clear();
//       return {
//         ...state,
//         isAuthenticated: false,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };

export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case constant.SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: true
      };
      
      case constant.SET_LOG_OUT:
        return {
          ...state,
          isAuthenticated: false
      };
      
    case constant.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      break;
  }
};
