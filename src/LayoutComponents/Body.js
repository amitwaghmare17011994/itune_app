import React from "react";
import { connect } from "react-redux";
import Grid from "./BodyComponents/Grid";

const Body = ({ songs, error, searchedTerm, showLoader }) => (
  <>
    {songs && songs.length > 0 && !error ? (
      <Grid songs={songs} />
    ) : error ? (
      "Something went wrong"
    ) : (
      songs && songs.length === 0 && "NO SONGS FOUND FOR SEARCHED TERM"
    )}
  </>
);
export default connect((state) => {
  const { data, error, searchedTerm } = state.songs;
  const { showLoader } = state.uiStates;
  return { songs: data, searchedTerm, error, showLoader };
})(Body);
