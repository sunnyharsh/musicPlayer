import { put } from "redux-saga/effects";
import axios from "../api.interface";
import { getSongsSuccess } from "../actions/getSongs.action";
export function* onGetSongs(data) {
  let obj = data.values;
  try {
    const data = yield axios.get(`/search?term=${obj.value}`);
    yield put(getSongsSuccess(data.data));
  } catch (error) {
    throw error;
  }
}
