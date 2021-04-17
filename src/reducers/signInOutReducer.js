import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_LOADING,
  SIGN_OUT,
} from "../actions/types";

const access = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");

const initialState = {
  isSignedIn: access ? true : null,
  token: {
    access: access,
    refresh: refresh,
  },
  responseData: null,
  loading: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        token: {
          access: action.payload.data.access,
          refresh: action.payload.data.refresh,
        },
        responseData: action.payload.data,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        responseData: action.payload.data,
        loading: false,
      };
    case SIGN_IN_LOADING:
      return {
        ...state,
        isSignedIn: false,
        responseData: null,
        loading: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        token: {
          access: null,
          refresh: null,
        },
        responseData: null,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signInReducer;
