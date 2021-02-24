// action types
const THEME_LIST_REQUEST = "THEME_LIST_REQUEST";
const THEME_LIST_SUCCESS = "THEME_LIST_SUCCESS";
const THEME_LIST_FAILURE = "THEME_LIST_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  themes: null,
  error: null,
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case THEME_LIST_REQUEST:
      return { ...state, fetching: true, error: null };
    case THEME_LIST_SUCCESS:
      return { ...state, fetching: false, themes: action.themes };
    case THEME_LIST_FAILURE:
      return { ...state, fetching: false, themes: null, error: action.error };
    default:
      return state;
  }
}
