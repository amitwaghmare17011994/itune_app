import { createReducer } from "reduxsauce";
import Types from "./actionTypes";

export const INITIAL_STATE = { error: false, songs: null, searchedTerm: null };

export const updateSongs = (state = INITIAL_STATE, action) => {
  return { ...state, error: false, data: action.songs };
};

export const updateSearchedTerm=(state=INITIAL_STATE,action)=>{
  return {...state,searchedTerm:action.searchedTerm}
}
export const setError = (state = INITIAL_STATE, action) => {
  return { ...state, error: action.isError, songs: null };
};

export const HANDLERS = {
  [Types.UPDATE_SONGS]: updateSongs,
  [Types.FAILURE]: setError,
  [Types.UPDATE_SEARCHED_TERM]:updateSearchedTerm
};

export default createReducer(INITIAL_STATE, HANDLERS);
