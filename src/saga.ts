import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("THEME_LIST_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchTheme() {
  return axios({
    method: "GET",
    url: "http://localhost:5000/themes",
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchTheme);
    const themes = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: "THEME_LIST_SUCCESS", themes });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "THEME_LIST_FAILURE", error });
  }
}
