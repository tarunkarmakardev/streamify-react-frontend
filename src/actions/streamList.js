import {
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  FETCH_LIST_LOADING,
} from "./types";
import streamify from "../api/Streamify";
import { refreshToken } from "./refreshToken";

const requestStreamList = (access, own = false) => {
  // console.log(access);
  return streamify.get(`/streams/${own ? "?own=true" : ""}`, {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  });
};
const requestStreamListNoAuth = () => {
  // console.log(access);
  return streamify.get("/streams/");
};

const dispatchSuccess = (dispatch, response) => {
  return dispatch({
    type: FETCH_LIST_SUCCESS,
    payload: response,
  });
};
const dispatchFailure = (
  dispatch,
  payload = { data: { detail: "Please sign in again!" } }
) => {
  dispatch({
    type: FETCH_LIST_FAILURE,
    payload,
  });
};

export const streamList = (own) => async (dispatch, getState) => {
  dispatch({
    type: FETCH_LIST_LOADING,
  });

  if (!getState().signInOutReducer.isSignedIn) {
    const response = await requestStreamListNoAuth();
    dispatchSuccess(dispatch, response);
  } else {
    const access = localStorage.getItem("access");
    try {
      if (access) {
        const response = await requestStreamList(access, own);
        dispatchSuccess(dispatch, response);
      } else {
        dispatchFailure(dispatch);
      }
    } catch (err) {
      try {
        await dispatch(refreshToken());
        // console.log(getState().refreshTokenReducer.refreshTokenStatus);
        if (getState().refreshTokenReducer.refreshTokenStatus === "OK") {
          const access = localStorage.getItem("access");
          const response = await requestStreamList(access, own);
          dispatchSuccess(dispatch, response);
        } else {
          dispatchFailure(dispatch);
        }
      } catch (err) {
        dispatchFailure(dispatch, err.response);
      }
    }
  }
};
