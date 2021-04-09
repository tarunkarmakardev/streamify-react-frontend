import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CLEAR_SIGNUP_STATE,
} from "../actions/types";

const initialState = {
  signUpResponse: null,
  signUpStatus: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpResponse: action.payload.data,
        signUpStatus: action.payload.status,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpResponse: action.payload.data,
        signUpStatus: action.payload.status,
      };
    case CLEAR_SIGNUP_STATE:
      return {
        ...state,
        signUpResponse: null,
        signUpStatus: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signUpReducer;
