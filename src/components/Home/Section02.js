import React from "react";
import { Link } from "react-router-dom";

const Section02 = () => {
  return (
    <div className="cast-carousal-container">
      <div className="cast-carousal-header">
        <div className="cast-carousal-header-left">Meet The Cast</div>
        <div className="cast-carousal-header-right">
          <Link to="/casts">View All</Link>
        </div>
      </div>
      <div className="cast-carousal">
        {" "}
        <Link to="/castdetails">
          <div className="character-container">
            <div className="character-image"></div>
            <div className="character-name">Character name</div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Section02;
