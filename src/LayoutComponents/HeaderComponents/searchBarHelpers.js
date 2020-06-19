import Types from "../../Reducers/actionTypes";
import SagaActionTypes from "../../Sagas/sagaActionTypes";

export const dispatchSetSearchedTerm = (dispatch, searchedTerm) =>
  dispatch({
    type: Types.UPDATE_SEARCHED_TERM,
    searchedTerm: searchedTerm,
  });

export const dispatchSearch = (dispatch, searchedTerm) =>
  dispatch({ type: SagaActionTypes.SEARCH_SONGS, searchedTerm: searchedTerm });
