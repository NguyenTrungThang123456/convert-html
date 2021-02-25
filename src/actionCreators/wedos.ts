import * as actionTypes from "../actionTypes/wedos";

export function getWedos() {
  return { type: actionTypes.GET_WEDOS };
}

export function getWedosSuccess(wedos: any) {
  return { type: actionTypes.GET_WEDOS_SUCCESS, wedos };
}

export function getWedosError(error: any) {
  return { type: actionTypes.GET_WEDOS_FAILURE, error };
}
