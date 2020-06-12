import { GET_SONGS_SUCCESS } from "../action.types";

const initState = [];

const reducers = (state = initState, { type, values, error }) => {
  switch (type) {
    case GET_SONGS_SUCCESS:
      return values;
    default:
      return state;
  }
};

export default reducers;
