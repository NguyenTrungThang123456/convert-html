import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/themes";
import * as actionCreators from "../actionCreators/themes";
import axios from "axios";

const API_ENDPOINT_THEME = "http://localhost:5000/themes";

function* getThemes() {
  try {
    let res = yield call(axios.get, `${API_ENDPOINT_THEME}`);
    yield put(actionCreators.getThemesSuccess(res.data));
  } catch (error) {
    yield put(actionCreators.getThemesError(error));
  }
}

export function* themeSaga() {
  yield takeLatest(actionTypes.GET_THEMES, getThemes);
}
