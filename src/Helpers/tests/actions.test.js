const { default: Types } = require("../../Reducers/actionTypes");
const {
  setLoaderAction,
  setSongsAction,
  setSearchedTermAction,
  setErrorMessageAction,
} = require("../actions");
const { mockResponse } = require("../../Constants/constants");

describe("Action Tests", () => {
  it("it should return action object with showLoader=true", () => {
    expect({ type: Types.SET_SHOW_LOADER, showLoader: true }).toEqual(
      setLoaderAction(true)
    );
  });
  it("it should return action object with showLoader=false", () => {
    expect({ type: Types.SET_SHOW_LOADER, showLoader: false }).toEqual(
      setLoaderAction(false)
    );
  });
  it("it should return action object with songs", () => {
    expect({ type: Types.UPDATE_SONGS, songs: mockResponse }).toEqual(
      setSongsAction(mockResponse)
    );
  });

  it("it should return setSearchedTermAction action object with searchedTerm", () => {
    expect({
      type: Types.UPDATE_SEARCHED_TERM,
      searchedTerm: "Test Search",
    }).toEqual(setSearchedTermAction("Test Search"));
  });
  it("it should return setErrorMessageAction action object", () => {
    expect({ type: Types.SET_ERROR, errorMessage: "Error" }).toEqual(
      setErrorMessageAction("Error")
    );
  });
});
