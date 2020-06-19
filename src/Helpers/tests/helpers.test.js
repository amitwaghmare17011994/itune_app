const { isEmptyString, filterResultBySongs } = require("../helpers")

describe('Testing helper methods', () => {
    it('it should return true for isEmptyString function',()=>{
        const isEmpty=isEmptyString("");
        expect(isEmpty).toBe(true);
    })
    it("it should return false for isEmptyString function", () => {
      const isEmpty = isEmptyString("SearchedTerm");
      expect(isEmpty).toBe(false);
    });
    it("it should return filtered array by kind===FILTER_TYPE",()=>{
        const testArray=[{kind:'movie'},{kind:'song'},{kind:'story'}]
        const resultArray=filterResultBySongs(testArray);
        expect(resultArray.length).toBe(1);
    })
    it("it should return empty array",()=>{
    const testArray = [{ kind: "movie" }, { kind: "music" }, { kind: "story" }];
    const resultArray = filterResultBySongs(testArray);
    expect(resultArray.length).toBe(0);        
    })  
})
