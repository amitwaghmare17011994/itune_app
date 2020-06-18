import React from "react";
import { searchSongs } from "../../Services/songs";
import { connect } from "react-redux";
import Types from "../../Reducers/actionTypes";

export const SearchBar = ({ searchedTerm, setSearchedTerm }) => (
  <div>
    <input
      type="text"
      placeholder="Search"
      value={searchedTerm || ""}
      onChange={(e) => setSearchedTerm(e.target.value)}
    />
    <button onClick={() => searchSongs(searchedTerm)}>Search</button>
  </div>
);

const mapStateToProps = (state) => {
  const { searchedTerm } = state.songs;

  return { searchedTerm };
};

const mapActionsToProps = (dispatch) => ({
  setSearchedTerm: (searchedTerm) =>
    dispatch({
      type: Types.UPDATE_SEARCHED_TERM,
      searchedTerm: searchedTerm,
    }),
});

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
