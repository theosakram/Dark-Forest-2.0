import React from "react";

function Identity({ color, oneCharacter }) {
  return (
    <>
      <div className="container has-text-centered">
        <h2
          className="subtitle has-text-white"
          style={{ textShadow: `0 0 10px ${color}` }}
        >
          {oneCharacter.title}
        </h2>
        <h1
          className="title has-text-white"
          style={{
            textShadow: `0 0 10px ${color}`,
            fontFamily: "Yeseva One",
          }}
        >
          {oneCharacter.name}
        </h1>
      </div>
    </>
  );
}

export default Identity;
