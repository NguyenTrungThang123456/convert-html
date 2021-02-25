import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/themes";
import * as actionCreators from "../actionCreators/themes";

const API_ENDPOINT_THEME = "http://localhost:5000/themes";

function* getThemes() {
  try {
    let themes = yield call(() =>
      fetch(API_ENDPOINT_THEME).then((response) => response.json())
    );
    yield put(actionCreators.getThemesSuccess(themes));
  } catch (error) {
    yield put(actionCreators.getThemesError(error));
  }
}

export function* themeSaga() {
  yield takeLatest(actionTypes.GET_THEMES, getThemes);
}
