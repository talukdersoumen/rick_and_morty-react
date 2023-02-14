import React from "react";
import { Link } from "react-router-dom";

const CastCarousalCard = ({ results }) => {
  const characterCards = results.map((x) => {
    let { id, image, name } = x;
    return (
      <Link key={id} to={`/castdetails/${id}`}>
        <div className="character-container">
          <div className="character-image">
            <img src={image} alt="characterImage" />
          </div>
          <div className="character-name">{name}</div>
        </div>
      </Link>
    );
  });

  return <>{characterCards}</>;
};

export default CastCarousalCard;
