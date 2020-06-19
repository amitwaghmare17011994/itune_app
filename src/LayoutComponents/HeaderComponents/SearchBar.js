import React from "react";

import { connect } from "react-redux";
import { Input, Row, Col, Space } from "antd";
import Types from "../../Reducers/actionTypes";
import SagaActionTypes from "../../Sagas/sagaActionTypes";
import { isEmptyString } from "../../Helpers/helpers";

const { Search } = Input;

export const SearchBar = ({ searchSongs, searchedTerm, setSearchedTerm }) => (
  <Row align="middle" justify="space-around">
    <Col span={12}>
      <div className="space-align-block">
        <Search
          placeholder="Search Artist Name"
          onSearch={() => searchSongs(searchedTerm)}
          onChange={(e) => setSearchedTerm(e.target.value)}
          enterButton
          value={searchedTerm}
        />
      </div>
    </Col>
  </Row>
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
  searchSongs: (searchedTerm) => {
    if (!isEmptyString(searchedTerm)) {
      dispatch({
        type: SagaActionTypes.SEARCH_SONGS,
        searchedTerm: searchedTerm,
      });
    }
  },
});

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
