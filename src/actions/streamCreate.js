import Streamify from "../api/Streamify";
import {
  STREAM_CREATE_SUCCESS,
  STREAM_CREATE_FAILURE,
  STREAM_CREATE_LOADING,
} from "./types";
import { refreshToken } from "./refreshToken";
import history from "../history";

const requestStreamCreate = (values, access) => {
  return Streamify.post("streams/", JSON.stringify(values), {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};

const dispatchFailure = (
  dispatch,
  payload = { data: { detail: "Please sign in again!" }, status: 401 }
) => {
  dispatch({
    type: STREAM_CREATE_FAILURE,
    payload,
  });
};

const dispatchSuccess = (dispatch, response) => {
  dispatch({
    type: STREAM_CREATE_SUCCESS,
    payload: response,
  });
  history.push("/");
};

export const streamCreate = (values) => async (dispatch, getState) => {
  dispatch({
    type: STREAM_CREATE_LOADING,
  });
  const access = localStorage.getItem("access");
  try {
    if (access) {
      const response = await requestStreamCreate(values, access);
      dispatchSuccess(dispatch, response);
    } else {
      dispatchFailure(dispatch);
    }
  } catch (err) {
    try {
      // Making an async request with another action creator to refresh the access token
      await dispatch(refreshToken());
      if (getState().refreshTokenReducer.refreshTokenStatus === "OK") {
        const response = await requestStreamCreate(
          values,
          localStorage.getItem("access")
        );
        dispatchSuccess(dispatch, response);
      } else {
        dispatchFailure(dispatch);
      }
    } catch (err) {
      dispatchFailure(dispatch, err.response);
    }
  }
};
