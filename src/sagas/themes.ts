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

function* uploadFile(action: any) {
  console.log(action.file);
}

function* createTheme(action: any) {
  const newTheme = {
    id: Math.floor(Math.random() * 100) + 1,
    title: action.theme.title,
    description: action.theme.description,
    image: action.theme.image,
    link: action.theme.link,
  };

  try {
    console.log(newTheme);

    yield put(actionCreators.uploadFiles(newTheme.image));
    // yield call(axios.post, `${API_ENDPOINT_THEME}`, newTheme);
    yield put(actionCreators.getThemes());
  } catch (error) {
    console.log(error);
  }
}

export function* themeSaga() {
  yield takeLatest(actionTypes.GET_THEMES, getThemes);
  yield takeLatest(actionTypes.CREATE_THEME, createTheme);
  yield takeLatest(actionTypes.UPLOAD_FILE, uploadFile);
}
