// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';


//Action Types
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCH_CHARACTERS });
  axios
    .get("https://swapi.co/api/people")
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data.results
      });
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err.message
      });
    });
};
