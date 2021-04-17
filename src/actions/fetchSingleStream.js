import {
  FETCH_SINGLE_STREAM_SUCCESS,
  FETCH_SINGLE_STREAM_FAILURE,
  FETCH_SINGLE_STREAM_LOADING,
} from "./types";
import Streamify from "../api/Streamify";
import { refreshToken } from "./refreshToken";

const requestStream = (access, id) => {
  return Streamify(`/streams/${id}`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};

const dispatchSuccess = (
  dispatch,
  response = { data: { detail: "Please sign in again!" } }
) => {
  dispatch({
    type: FETCH_SINGLE_STREAM_SUCCESS,
    payload: response,
  });
};
const dispatchFailure = (dispatch, response) => {
  dispatch({
    type: FETCH_SINGLE_STREAM_FAILURE,
    payload: response,
  });
};

export const fetchSingleStream = (id) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_SINGLE_STREAM_LOADING,
  });

  const access = localStorage.getItem("access");
  try {
    if (access) {
      const resposne = await requestStream(access, id);
      dispatchSuccess(dispatch, resposne);
    } else {
      dispatchFailure(dispatch);
    }
  } catch (err) {
    try {
      await dispatch(refreshToken());
      if (getState().refreshTokenReducer.refreshTokenStatus === "OK") {
        const access = localStorage.getItem("access");
        const resposne = await requestStream(access, id);
        dispatchSuccess(dispatch, resposne);
      } else {
        dispatchFailure(dispatch);
      }
    } catch (err) {
      dispatchFailure(dispatch, err.response);
    }
  }
};
