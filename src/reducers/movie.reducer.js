import {
  ACT_MOVIES_REQUEST,
  ACT_MOVIES_SUCCESS,
  ACT_MOVIES_CLEAR,
} from '../constants/actions';

const initialState = {
  movies: [],
  loading: false,
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_MOVIES_REQUEST:
      return { ...state, loading: true };
    case ACT_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    default:
      return state;
  }
}

export default movieReducer;
