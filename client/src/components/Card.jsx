import React from "react";
import { useHistory } from "react-router-dom";

function Card({ character, color }) {
  const history = useHistory();

  function toDetail(id) {
    history.push(`/details/${id}`);
  }

  return (
    <>
      <div className="column is-one-third">
        <div className="card" onClick={() => toDetail(character.id)}>
          <div className="card-image">
            <figure className="image">
              <img src={character.image_url} alt={character.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p
                  className="subtitle is-6"
                  style={{ textShadow: `0 0 10px ${color}` }}
                >
                  {character.title}
                </p>
                <p
                  className="title is-4"
                  style={{
                    textShadow: `0 0 10px ${color}`,
                    fontFamily: "Yeseva one",
                  }}
                >
                  {character.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
