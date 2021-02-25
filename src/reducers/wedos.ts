import * as actionTypes from "../actionTypes/wedos";

const initialState = {
  fetching: false,
  wedos: null,
  error: null,
};

const wedoReducer = (state = initialState, action: any) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.GET_WEDOS:
      return { ...state, fetching: true, error: null };
    case actionTypes.GET_WEDOS_SUCCESS:
      return { ...state, fetching: false, wedos: action.wedos };
    case actionTypes.GET_WEDOS_FAILURE:
      return { ...state, fetching: false, wedos: null, error: action.error };
    default:
      return state;
  }
};

export default wedoReducer;
