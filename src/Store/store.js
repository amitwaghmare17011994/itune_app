import { combineReducers, createStore, applyMiddleware } from "redux";
import songsReducer from "../Reducers/songsReducer";
import uiReducer from "../Reducers/uiReducer";
import createSagaMiddleware from "redux-saga";
import fetchSongsWatcher from "../Sagas/saga";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ songs: songsReducer, uiStates: uiReducer }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fetchSongsWatcher);
