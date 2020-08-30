import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/actions";
import { useParams } from "react-router-dom";
import { Card } from "../components";

function Characters() {
  const { job } = useParams();
  const dispatch = useDispatch();
  const { characters, loading, error } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters(`http://localhost:3000/character/job/${job}`));
  }, [job]);

  const color =
    job === "Knight"
      ? "#1624dd"
      : job === "Warrior"
      ? "#ffba00"
      : job === "Assassin"
      ? "#9c00ff"
      : job === "Archer"
      ? "#12c82c"
      : job === "Mechanic"
      ? "#021aff"
      : job === "Wizard"
      ? "#ff0303"
      : "#4eddc1";

  return (
    <>
      <div
        className="box"
        style={{
          backgroundImage:
            "url(https://www.kingsraid.com/resources_en/images/landscape.jpg?v=01)",
        }}
      >
        <div className="hero is-fullheight">
          <div className="columns is-multiline">
            {characters.map((character) => (
              <Card color={color} character={character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Characters;
