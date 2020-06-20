import { call, put, takeEvery } from "redux-saga/effects";
import SagaActionTypes from "./sagaActionTypes";
import { searchSongsApi } from "../Services/songs";
import {
  setLoaderAction,
  setSongsAction,
  setErrorMessageAction,
} from "../Helpers/actions";

export function* fetchSongsWorker(action) {
  try {
    const { searchedTerm } = action;
    yield put(setLoaderAction(true));
    const response = yield call(searchSongsApi, searchedTerm);
    yield put(setSongsAction(response));
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
