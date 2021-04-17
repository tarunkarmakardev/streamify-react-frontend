import {
  DELETE_SUCCESS,
  DELETE_FAILURE,
  DELETE_LOADING,
} from "../../actions/types";

const initialState = {
  data: null,
  loading: null,
};

const deleteStreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case DELETE_LOADING:
      return {
        ...state,
        data: action.payload,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default deleteStreamReducer;
