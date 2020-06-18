import React from "react";
import GridItem from "./GridItem";

const Grid = ({ songs = [] }) => (
  <div>
    {songs.map((songItem = {}) => (
      <GridItem song={songItem} key={songItem.trackId}/>
    ))}
  </div>
);
export default Grid;
