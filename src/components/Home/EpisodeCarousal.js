import React, { useState, useEffect } from "react";

function EpisodeCarousal() {
  let [pageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState({});

  let api = `https://rickandmortyapi.com/api/episode?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const { results } = fetchedData;

  return (
    <div className="episodes-carousal-container">
      <div className="episodes-carousal-header">Episodes</div>
      <div className="episodes-carousal">
        {results &&
          results.map((epsds) => {
            let { id, episode, name } = epsds;

            return (
              <div key={id} className="episodes-container">
                <div className="episode-number">{episode}</div>
                <div className="episode-name">{name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default EpisodeCarousal;
