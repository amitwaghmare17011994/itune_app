import store from "../Store/store";
import Types from "../Reducers/actionTypes";

export const setSongs = (songs = []) =>
  store.dispatch({ type: Types.UPDATE_SONGS, songs: [...songs] });

export const setSearchedTerm = (searchedTerm) =>
  store.dispatch({
    type: Types.UPDATE_SEARCHED_TERM,
    searchedTerm: searchedTerm,
  });

export const setError = (isError) =>
  store.dispatch({ type: Types.FAILURE, isError: isError });

export const isEmptyString = (term) =>
  term === "" || term.replace(/ /g, "").length === 0;

export const setShowLoader = (loaderFlag) =>
  store.dispatch({ type: Types.SET_SHOW_LOADER, showLoader: loaderFlag });

export const gotoURL=(url)=>window.open(url,'_blank') 
