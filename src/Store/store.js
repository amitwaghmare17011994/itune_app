import { combineReducers, createStore } from "redux";
import songsReducer from "../Reducers/songsReducer";
import uiReducer from "../Reducers/uiReducer";

export default createStore(
  combineReducers({ songs: songsReducer, uiStates: uiReducer })
);
