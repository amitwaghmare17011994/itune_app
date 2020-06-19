const {
  dispatchSetSearchedTerm,
  dispatchSearch,
} = require("../searchBarHelpers");
const { expectation } = require("sinon");

describe("SearchBar Helpers Tests", () => {
  it("it should call dispatch to set searched term", () => {
    const dispatch = jest.fn();
    dispatchSetSearchedTerm(dispatch, "Test Term");
    expect(dispatch).toBeCalled();
  });
  it("it should call dispatch to call sarch api", () => {
    const dispatch = jest.fn();
    dispatchSearch(dispatch, "Test Term");
    expect(dispatch).toBeCalled();
  });
});
