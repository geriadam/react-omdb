import axios from 'axios';
import { Config } from '../constants';
import {
  ACT_MOVIES_REQUEST,
  ACT_MOVIES_SUCCESS,
  ACT_MOVIES_CLEAR,
} from '../constants/actions';

export const fetchMovies = (text, page = 1) => {
  return async dispatch => {
    dispatch({
      type: ACT_MOVIES_REQUEST,
    })
    try {
      const response = await axios.get(`${Config.url}/?apikey=${Config.apiKey}&s=${text}&page=${page}`);
      dispatch({
        type: ACT_MOVIES_SUCCESS,
        payload: response.data,
      })
    } catch (error){
      console.log(error)
    }
  }
}

export const clearMovies = () => {
  return dispatch => {
    dispatch({
      type: ACT_MOVIES_CLEAR,
    })
  }
}
