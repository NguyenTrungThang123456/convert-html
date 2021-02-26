import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/themes";
import * as actionCreators from "../actionCreators/themes";
import axios from "axios";
import { Theme } from "../types";

const API_ENDPOINT_THEME = "http://localhost:5000/themes";

function* getThemes() {
  try {
    let res = yield call(axios.get, `${API_ENDPOINT_THEME}`);
    yield put(actionCreators.getThemesSuccess(res.data));
  } catch (error) {
    yield put(actionCreators.getThemesError(error));
  }
}
const getBase64 = (file: any) =>
  new Promise(function (resolve, reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

async function createTheme(action: any) {
  const res = await getBase64(action.theme.image).then((res) => {
    return res;
  });

  const newTheme: Theme = {
    id: Math.floor(Math.random() * 1000) + 1,
    title: action.theme.title,
    description: action.theme.description,
    image: res,
    link: action.theme.link,
  };

  try {
    let response = await axios.post(`${API_ENDPOINT_THEME}`, newTheme);
  } catch (error) {
    console.log(error);
  }
}

function* deleteTheme(action: any) {
  try {
    yield call(axios.delete, `${API_ENDPOINT_THEME}/${action.id}`);
    yield put(actionCreators.getThemes());
    // yield console.log(action);
  } catch (error) {
    console.log(error);
  }
}

export function* themeSaga() {
  yield takeLatest(actionTypes.GET_THEMES, getThemes);
  yield takeLatest(actionTypes.CREATE_THEME, createTheme);
  yield takeLatest(actionTypes.DELETE_THEME, deleteTheme);
}
