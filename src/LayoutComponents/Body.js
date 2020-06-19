import React from "react";
import { connect } from "react-redux";
import Grid from "./BodyComponents/Grid";
import Loader from "./BodyComponents/Loader";
import EmptyMessage from "./BodyComponents/EmptyMessage";
import WelcomeMessage from "./BodyComponents/WelcomeMessage";

export const Body = ({ songs, error, searchedTerm, showLoader }) => (
  <>
    {showLoader && <Loader />}
    {songs && songs.length > 0 && !error ? (
      <Grid songs={songs} />
    ) : error ? (
      "Something went wrong"
    ) : (
      <div className="place_vertical_canter">
        {songs && songs.length === 0 ? (
          <EmptyMessage />
        ) : (
          <center>
            <WelcomeMessage />
          </center>
        )}
      </div>
    )}
  </>
);
export default connect((state) => {
  const { data, error, searchedTerm } = state.songs;
  const { showLoader } = state.uiStates;
  return { songs: data, searchedTerm, error, showLoader };
})(Body);
