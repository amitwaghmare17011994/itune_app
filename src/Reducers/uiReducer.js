import { createReducer } from "reduxsauce";
import Types from "./actionTypes";
export const INITIAL_STATE = { showLoader: false };

export const updateShowLoader = (state = INITIAL_STATE, action) => {
  return { showLoader: action.showLoader };
};

export const HANDLERS = {
  [Types.SET_SHOW_LOADER]: updateShowLoader,
};

export default createReducer(INITIAL_STATE, HANDLERS);
