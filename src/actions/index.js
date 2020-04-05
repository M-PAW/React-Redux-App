import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_STARTED';
export const FETCH_JOKES_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_JOKES_FAIL = 'FETCH_FAIL';

export const getJoke = () => dispatch {
    dispatch({ type: FETCH_JOKES_START});
    axios.get('')
    .then(response =>
        dispatch({ type: FETCH_JOKES_SUCCESS, payload: response.data}))
        console.log(response.data)
        .catch(error => dispatch({type}))
}