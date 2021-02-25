import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/wedos";
import * as actionCreators from "../actionCreators/wedos";

const API_ENDPOINT_THEME = "http://localhost:5000/wedos";

function* getWedos() {
  try {
    let wedos = yield call(() =>
      fetch(API_ENDPOINT_THEME).then((response) => response.json())
    );
    console.log(wedos);

    yield put(actionCreators.getWedosSuccess(wedos));
  } catch (error) {
    yield put(actionCreators.getWedosError(error));
  }
}

export function* wedoSaga() {
  yield takeLatest(actionTypes.GET_WEDOS, getWedos);
}
