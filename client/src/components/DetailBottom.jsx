import React from "react";
import Card from "./Card";

function DetailBottom({ color, oneCharacter }) {
  const background =
    oneCharacter.job === "Knight"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg01.jpg"
      : oneCharacter.job === "Warrior"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg02.jpg"
      : oneCharacter.job === "Assassin"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg03.jpg"
      : oneCharacter.job === "Archer"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg04.jpg"
      : oneCharacter.job === "Mechanic"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg05.jpg"
      : oneCharacter.job === "Wizard"
      ? "https://www.kingsraid.com/resources_en/images/sub/jobBg06.jpg"
      : "https://www.kingsraid.com/resources_en/images/sub/jobBg07.jpg";
  return (
    <>
      <div
        className="hero is-fullheight"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="columns">
          <div className="column">
            <Card color={color} character={oneCharacter} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailBottom;
