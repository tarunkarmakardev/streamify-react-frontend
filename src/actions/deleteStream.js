import { DELETE_SUCCESS, DELETE_FAILURE, DELETE_LOADING } from "./types";
import Streamify from "../api/Streamify";
import { refreshToken } from "./refreshToken";
import history from "../history";

const requestDelete = (id, access) => {
  return Streamify.delete(`/streams/${id}/`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};

const dispatchSuccess = (dispatch) => {
  dispatch({
    type: DELETE_SUCCESS,
    payload: {
      success: true,
    },
  });
  history.push("/streams/view/own");
};
const dispatchFailure = (dispatch, response) => {
  dispatch({
    type: DELETE_FAILURE,
    payload: {
      success: false,
      response,
    },
  });
};

export const deleteStream = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_LOADING,
  });
  const access = localStorage.getItem("access");
  try {
    if (access) {
      const response = await requestDelete(id, access);
      if (response.status === 204) {
        dispatchSuccess(dispatch);
      }
    } else {
      dispatchFailure(dispatch);
    }
  } catch (err) {
    try {
      await dispatch(refreshToken());
      if (getState().refreshTokenReducer.refreshTokenStatus === "OK") {
        const access = localStorage.getItem("access");
        const response = await requestDelete(id, access);
        if (response.status === 204) {
          dispatchSuccess(dispatch);
        }
      } else {
        dispatchFailure(dispatch);
      }
    } catch (err) {
      dispatchFailure(dispatch, err.response);
    }
  }
};
