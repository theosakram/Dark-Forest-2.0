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
        <div class="card" onClick={() => toDetail(character.id)}>
          <div class="card-image">
            <figure class="image">
              <img src={character.image_url} alt={character.name} />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p
                  class="subtitle is-6"
                  style={{ textShadow: `0 0 10px ${color}` }}
                >
                  {character.title}
                </p>
                <p
                  class="title is-4"
                  style={{ textShadow: `0 0 10px ${color}` }}
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
