import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actionTypes/wedos";
import * as actionCreators from "../actionCreators/wedos";
import axios from "axios";

const API_ENDPOINT_WEDO = "http://localhost:5000/wedos";

function* getWedos() {
  try {
    let res = yield call(axios.get, `${API_ENDPOINT_WEDO}`);

    yield put(actionCreators.getWedosSuccess(res.data));
  } catch (error) {
    yield put(actionCreators.getWedosError(error));
  }
}

export function* wedoSaga() {
  yield takeLatest(actionTypes.GET_WEDOS, getWedos);
}
