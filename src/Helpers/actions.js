import Types from "../Reducers/actionTypes";

export const setLoaderAction = (showLoader) => ({
  type: Types.SET_SHOW_LOADER,
  showLoader: showLoader,
});

export const setSongsAction = (songs) => ({
  type: Types.UPDATE_SONGS,
  songs: songs,
});

export const setSearchedTermAction = (searchedTerm) => ({
  type: Types.UPDATE_SEARCHED_TERM,
  searchedTerm: searchedTerm,
});

export const setErrorMessageAction = (msg) => ({
  type: Types.SET_ERROR,
  errorMessage: msg,
});
