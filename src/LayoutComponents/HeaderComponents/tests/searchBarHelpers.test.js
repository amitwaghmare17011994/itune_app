const { dispatchSearch } = require("../searchBarHelpers");
const { expectation } = require("sinon");

describe("SearchBar Helpers Tests", () => {
  it("it should call dispatch to call sarch api", () => {
    const dispatch = jest.fn();
    dispatchSearch(dispatch, "Test Term");
    expect(dispatch).toBeCalled();
  });
});
