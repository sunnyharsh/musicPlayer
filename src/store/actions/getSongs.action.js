import { GET_SONGS, GET_SONGS_SUCCESS } from "../action.types";

export const getSongs = values => ({
  type: GET_SONGS,
  values
});
export const getSongsSuccess = values => ({
  type: GET_SONGS_SUCCESS,
  values
});
