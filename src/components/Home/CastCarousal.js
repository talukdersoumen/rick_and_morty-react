import React, { useState, useEffect } from "react";
import CastCarousalCard from "../CastCarousalCard";
import { Link } from "react-router-dom";

function CastCarousal() {
  let [pageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState({});

  let api = `https://rickandmortyapi.com/api/character?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="cast-carousal-container">
      <div className="cast-carousal-header">
        <div className="cast-carousal-header-left">Meet The Cast</div>
        <div className="cast-carousal-header-right">
          <Link to="/casts">View All</Link>
        </div>
      </div>
      <div className="cast-carousal">
        {fetchedData.results ? (
          <CastCarousalCard results={fetchedData.results} />
        ) : null}
      </div>
    </div>
  );
}

export default CastCarousal;
