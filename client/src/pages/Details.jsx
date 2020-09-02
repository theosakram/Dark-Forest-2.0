import React from "react";
import { DetailTop, DetailBottom } from "../components";

function CharaCard({ oneCharacter, color }) {
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
        </div>
      </div>
      {/* <DetailTop color={color} oneCharacter={oneCharacter} /> */}
      {/* <DetailBottom color={color} oneCharacter={oneCharacter} /> */}
    </>
  );
}

export default CharaCard;
