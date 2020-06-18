import React from "react";
import { connect } from "react-redux";
import Grid from "./BodyComponents/Grid";

const Body = ({ songs, error, searchedTerm }) => (
  <div>
    {songs && songs.length > 0 ? (
      <Grid songs={songs} />
    ) : (
      songs && songs.length == 0 && "NO SONGS FOUND FOR SEARCHED TERM"
    )}
  </div>
);
export default connect((state) => {
  const { data, error, searchedTerm } = state.songs;
  return { songs: data,searchedTerm, error };
})(Body);
