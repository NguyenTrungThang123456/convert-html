import { all } from "redux-saga/effects";
import { themeSaga } from "./themes";
import { wedoSaga } from "./wedos";

export default function* rootSaga() {
  yield all([themeSaga(), wedoSaga()]);
}
