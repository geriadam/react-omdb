import axios from 'axios';
import {
  ACT_MOVIES_REQUEST,
  ACT_MOVIES_CLEAR,
} from '../constants/actions';

export const fetchMovies = (term) => {
  const request = axios.get(`https://www.omdbapi.com/?apikey=c148ab6e&s=${term}`);

  return {
    type: ACT_MOVIES_REQUEST,
    payload: request
  }
}

export const clearMovies = () => {
  return {
    type: ACT_MOVIES_CLEAR
  }
}
