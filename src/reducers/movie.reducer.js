import {
  ACT_MOVIES_REQUEST,
  ACT_MOVIES_SUCCESS,
  ACT_MOVIES_CLEAR,
} from '../constants/actions';

const initialState = {
  movies: [],
  totalResults: 0,
  loading: false,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_MOVIES_REQUEST:
      return { ...state, loading: true };
    case ACT_MOVIES_SUCCESS:
      return { ...state, movies: action.payload.Search, totalResults: action.payload.totalResults, loading: false };
    default:
      return state;
  }
}

export default movieReducer;
