import { TOKEN_REFRESH_SUCCESS, TOKEN_REFRESH_FAILURE } from "../actions/types";

const initialState = {
  refreshTokenStatus: null,
};

const refreshTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_REFRESH_SUCCESS:
      return {
        ...state,
        refreshTokenStatus: "OK",
      };
    case TOKEN_REFRESH_FAILURE:
      return {
        ...state,
        refreshTokenStatus: action.payload || "FAIL",
      };
    default:
      return {
        ...state,
      };
  }
};

export default refreshTokenReducer;
