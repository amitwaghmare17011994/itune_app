import React from "react";

import { connect } from "react-redux";
import { Input, Row, Col } from "antd";
import { isEmptyString } from "../../Helpers/helpers";
import {
  dispatchSetSearchedTerm,
  dispatchSearch,
} from "./searchBarHelpers"

const { Search } = Input;

export const SearchBar = ({ searchSongs, searchedTerm, setSearchedTerm }) => (
  <Row align="middle" justify="space-around">
    <Col span={12}>
      <div className="space-align-block">
        <Search
          placeholder="Search for Songs, Artist"
          onSearch={() => searchSongs(searchedTerm)}
          onChange={(e) => setSearchedTerm(e.target.value)}
          enterButton
          value={searchedTerm}
        />
      </div>
    </Col>
  </Row>
);

export const mapStateToProps = (state) => {
  const { searchedTerm } = state.songs;
  return { searchedTerm };
};

export const mapActionsToProps = (dispatch) => ({
  setSearchedTerm: (searchedTerm) =>
    dispatchSetSearchedTerm(dispatch, searchedTerm),
  searchSongs: (searchedTerm) => {
    if (!isEmptyString(searchedTerm)) {
      dispatchSearch(dispatch,searchedTerm);
    }
  },
});

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
