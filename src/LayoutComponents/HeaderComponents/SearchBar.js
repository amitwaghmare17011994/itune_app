import React from "react";
import { searchSongs } from "../../Services/songs";
import { connect } from "react-redux";
import { Input, Row, Col, Space } from "antd";
import Types from "../../Reducers/actionTypes";

const { Search } = Input;

export const SearchBar = ({ searchedTerm, setSearchedTerm }) => (
  <Row align="middle" justify="space-around">
    <Col span={12}>
      <div className="space-align-block">
        <Search
          placeholder="Search Artist Name"
          onSearch={searchSongs}
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
});

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);
