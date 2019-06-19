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

//ActionCreators
export const success = (data) => {
    return {
        type: types.SUCCESS,
        payload: data,
    }
}


export const failure = (message) => {
    return {
        type: types.FAILURE,
        payload: message,
    }
}

export const fetchCharacters = () => dispatch => {
    // we code
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        dispatch(success(res.data)); 
      })
      .catch(error => {
        console.log(error.message);
        dispatch(failure(error.message));
      });
  };