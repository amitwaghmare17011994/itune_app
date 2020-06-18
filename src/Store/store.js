import { combineReducers, createStore } from "redux";
import songsReducer from "../Reducers/songsReducer";

export default createStore(combineReducers({ songs: songsReducer }));
