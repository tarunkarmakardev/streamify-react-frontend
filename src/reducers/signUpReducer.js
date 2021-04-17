import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  CLEAR_SIGNUP_STATE,
  SIGN_UP_LOADING,
} from "../actions/types";

const initialState = {
  signUpResponse: null,
  signUpStatus: null,
  loading: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpResponse: action.payload.data,
        signUpStatus: action.payload.status,
        loading: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpResponse: action.payload.data,
        signUpStatus: action.payload.status,
        loading: false,
      };
    case CLEAR_SIGNUP_STATE:
      return {
        ...state,
        signUpResponse: null,
        signUpStatus: null,
        loading: false,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        signUpResponse: null,
        signUpStatus: null,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signUpReducer;
