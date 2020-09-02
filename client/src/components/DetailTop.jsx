import React from "react";
import Identity from "./Identity";

function DetailTop({ color, oneCharacter }) {
  return (
    <>
      <div
        className="hero is-fullheight"
        style={{
          backgroundImage: `url(${oneCharacter.background_url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content" />
        <div className="hero-body">
          <Identity color={color} oneCharacter={oneCharacter} />
        </div>
      </div>
    </>
  );
}

export default DetailTop;
