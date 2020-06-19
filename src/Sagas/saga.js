import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import SagaActionTypes from "./sagaActionTypes";
import { searchSongsApi } from "../Services/songs";
import Types from "../Reducers/actionTypes";
import { filterResultBySongs, isEmptyString } from "../Helpers/helpers";

function* fetchSongsWorker(action) {
  try {
    const { searchedTerm } = action;
    if (!isEmptyString(searchedTerm)) {
      yield put({ type: Types.SET_SHOW_LOADER, showLoader: true });
      const response = yield call(searchSongsApi, searchedTerm);
      const filteredSongs = filterResultBySongs(response);
      yield put({
        type: Types.UPDATE_SONGS,
        songs: filterResultBySongs(filteredSongs),
      });
      if (filteredSongs && filteredSongs.length) {
        // For Empty Array Do Not Remove Searched Term From Searched Field
        yield put({ type: Types.UPDATE_SEARCHED_TERM, searchedTerm: "" });
      }
      yield put({ type: Types.SET_SHOW_LOADER, showLoader: false });
    }
  } catch (e) {
    yield put({ type: Types.SET_ERROR, errorMessage: e.message });
    yield put({ type: Types.SET_SHOW_LOADER, showLoader: false });
  }
}

function* fetchSongsWatcher() {
  yield takeEvery(SagaActionTypes.SEARCH_SONGS, fetchSongsWorker);
}

export default fetchSongsWatcher;
