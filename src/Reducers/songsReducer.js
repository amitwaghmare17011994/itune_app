import { createReducer } from "reduxsauce";
import Types from "./actionTypes";

export const INITIAL_STATE = { error: false, songs: null, searchedTerm: null };

export const updateSongs = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, data: action.songs };
};

export const updateSearchedTerm = (state = INITIAL_STATE, action) => {
  return { ...state, searchedTerm: action.searchedTerm };
};
export const updateError = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.errorMessage, songs: null };
};

export const HANDLERS = {
  [Types.UPDATE_SONGS]: updateSongs,
  [Types.SET_ERROR]: updateError,
  [Types.UPDATE_SEARCHED_TERM]: updateSearchedTerm,
};

export default createReducer(INITIAL_STATE, HANDLERS);
