import { takeLatest, all } from "redux-saga/effects";
import { GET_SONGS } from "../action.types";

import { onGetSongs } from "./getSongs.saga";

function* sagas() {
  yield all([takeLatest(GET_SONGS, onGetSongs)]);
}

export default sagas;
