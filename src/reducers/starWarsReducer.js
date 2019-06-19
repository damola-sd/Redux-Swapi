import * as types from '../actions';
const initialState = {
  characters: [],
  error: null,
  fetching: false,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case(types.FETCH_CHARACTERS):
      return { ...state, fetching: true};

    case(types.SUCCESS):
      return {
        ...state,
        characters: {...state.characters, ...action.payload},
        fetching: false
      };

    case(types.FAILURE):
      return {...state, fetching: false, error: action.payload};
      
    default:
      return state;
  }
};
