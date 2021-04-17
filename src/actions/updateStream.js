import {
  UPDATE_STREAM_SUCCESS,
  UPDATE_STREAM_FAILURE,
  UPDATE_STREAM_LOADING,
} from "./types";
import Streamify from "../api/Streamify";
import { refreshToken } from "./refreshToken";
import history from "../history";

const requestUpdate = (access, id, formValues) => {
  return Streamify.patch(`/streams/${id}/`, JSON.stringify(formValues), {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};

const dispatchSuccess = (dispatch, response) => {
  dispatch({
    type: UPDATE_STREAM_SUCCESS,
    payload: response,
  });
  history.push("/streams/view/own");
};

const dispatchFailure = (
  dispatch,
  response = { data: { detail: "Please sign in again!" }, status: 401 }
) => {
  dispatch({
    type: UPDATE_STREAM_FAILURE,
    payload: response,
  });
};

export const updateStream = (id, formValues) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_STREAM_LOADING,
  });

  const access = localStorage.getItem("access");
  try {
    if (access) {
      const response = await requestUpdate(access, id, formValues);
      dispatchSuccess(dispatch, response);
    } else {
      dispatchFailure(dispatch);
    }
  } catch (err) {
    try {
      await dispatch(refreshToken());
      if (getState().refreshTokenReducer.refreshTokenStatus === "OK") {
        const access = localStorage.getItem("access");
        const response = await requestUpdate(access, id, formValues);
        dispatchSuccess(dispatch, response);
      } else {
        dispatchFailure(dispatch);
      }
    } catch (err) {
      dispatchFailure(dispatch, err.response);
    }
  }
};
