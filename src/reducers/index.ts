import { combineReducers } from "redux";

import themeReducer from "./themes";
import wedoReducer from "./wedos";

const reducer = combineReducers({
  themeReducer: themeReducer,
  wedoReducer: wedoReducer,
});

export default reducer;
