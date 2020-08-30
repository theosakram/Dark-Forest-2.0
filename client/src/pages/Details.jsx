import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOne } from "../store/actions";

function CharaCard() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { oneCharacter } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(fetchOne(`http://localhost:3000/character/${id}`));
  }, []);

  const color =
    oneCharacter.job === "Knight"
      ? "#1624dd"
      : oneCharacter.job === "Warrior"
      ? "#ffba00"
      : oneCharacter.job === "Assassin"
      ? "#9c00ff"
      : oneCharacter.job === "Archer"
      ? "#12c82c"
      : oneCharacter.job === "Mechanic"
      ? "#021aff"
      : oneCharacter.job === "Wizard"
      ? "#ff0303"
      : "#4eddc1";

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
        <div className="content"></div>
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
              style={{ textShadow: `0 0 10px ${color}` }}
            >
              {oneCharacter.name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharaCard;
