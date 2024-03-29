import React from "react";
import Track from "../Track/Track";

function TrackList({ tracks, isRemoval, operateMethod }) {
  return (
    <div className="track-list">
      {tracks.map((track) => {
        return (
          <Track
            key={track.id}
            track={track}
            isRemoval={isRemoval}
            operateMethod={operateMethod}
          />
        );
      })}
    </div>
  );
}

export default TrackList;
