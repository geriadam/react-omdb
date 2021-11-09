import {
  ACT_MOVIES_REQUEST,
  ACT_MOVIES_CLEAR,
} from '../constants/actions';

const movieReducer = (state = [], action) => {
  if (action.type === ACT_MOVIES_REQUEST) {
    return action.payload.data.Search;
  } else if (action.type === ACT_MOVIES_CLEAR) {
    return [];
  }

  return state;
}

export default movieReducer;
