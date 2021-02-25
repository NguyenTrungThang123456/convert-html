import * as actionTypes from "../actionTypes/themes";

const initialState = {
  fetching: false,
  themes: null,
  error: null,
};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_THEMES:
      return { ...state, fetching: true, error: null };
    case actionTypes.GET_THEMES_SUCCESS:
      return { ...state, fetching: false, themes: action.themes };
    case actionTypes.GET_THEMES_FAILURE:
      return { ...state, fetching: false, themes: null, error: action.error };
    default:
      return state;
  }
};

export default themeReducer;
