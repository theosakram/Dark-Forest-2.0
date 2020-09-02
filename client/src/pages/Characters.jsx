import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../store/actions";
import { useParams } from "react-router-dom";
import { Card, Hero } from "../components";
import { Swiper } from "swiper";
import Details from "./Details";

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

  let swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  return (
    <>
      {characters && (
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {characters.map((character, index) => (
              <div key={index} className="swiper-slide">
                <Details oneCharacter={character} color={color} />
                <div
                  className="swiper-button-next"
                  style={{ color, textShadow: `0 0 10px ${color}` }}
                ></div>
                <div
                  className="swiper-button-prev"
                  style={{ color, textShadow: `0 0 10px ${color}` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      )}
      {loading && <Hero />}
    </>
  );
}

export default Characters;
