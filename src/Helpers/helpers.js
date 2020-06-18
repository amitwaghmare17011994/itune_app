import store from "../Store/store";
import Types from "../Reducers/actionTypes";

export const updateSongs = (songs = []) =>
  store.dispatch({ type: Types.UPDATE_SONGS, songs: [...songs] });

export const setSearchedTerm = (searchedTerm) =>
  store.dispatch({
    type: Types.UPDATE_SEARCHED_TERM,
    searchedTerm: searchedTerm,
  });

export const setError = (isError) =>
  store.dispatch({ type: Types.FAILURE, isError: isError });
