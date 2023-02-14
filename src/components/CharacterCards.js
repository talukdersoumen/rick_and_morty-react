import React from "react";

const CharacterCards = ({ results }) => {
  const characterCards = results.map((x) => {
    let { id, image, name } = x;
    return (
      <div key={id} className="character-card">
        <div className="character-card-img">
          <img src={image} alt="characterImage" />
        </div>
        <div className="character-name">{name}</div>
      </div>
    );
  });

  return (
    <div>
      <div className="container-title">The Cast</div>
      <div className="grid-container">{characterCards}</div>
    </div>
  );
};

export default CharacterCards;
