import { call, put, takeEvery } from "redux-saga/effects";
import SagaActionTypes from "./sagaActionTypes";
import { searchSongsApi } from "../Services/songs";
import { filterResultBySongs } from "../Helpers/helpers";
import {
  setLoaderAction,
  setSongsAction,
  setSearchedTermAction,
  setErrorMessageAction,
} from "../Helpers/actions";

export function* fetchSongsWorker(action) {
  try {
    const { searchedTerm } = action;
    yield put(setLoaderAction(true));
    const response = yield call(searchSongsApi, searchedTerm);
    const filteredSongs = filterResultBySongs(response);
    yield put(setSongsAction(filteredSongs));
    if (filteredSongs && filteredSongs.length) {
      yield put(setSearchedTermAction(""));
    }
    yield put(setLoaderAction(false));
  } catch (e) {
    yield put(setErrorMessageAction(e.message));
    yield put(setLoaderAction(false));
  }
}

function* fetchSongsWatcher() {
  yield takeEvery(SagaActionTypes.SEARCH_SONGS, fetchSongsWorker);
}

export default fetchSongsWatcher;
