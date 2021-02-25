import * as actionTypes from "../actionTypes/themes";

export function getThemes() {
  return { type: actionTypes.GET_THEMES };
}

export function getThemesSuccess(themes: any) {
  return { type: actionTypes.GET_THEMES_SUCCESS, themes };
}

export function getThemesError(error: any) {
  return { type: actionTypes.GET_THEMES_FAILURE, error };
}
