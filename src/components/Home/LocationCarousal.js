import React, { useState, useEffect } from "react";

function LocationCarousal() {
  let [pageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState({});

  let api = `https://rickandmortyapi.com/api/location?page=${pageNumber}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const { results } = fetchedData;

  return (
    <div className="locations-carousal-container">
      <div className="locations-carousal-header">Locations</div>
      <div className="locations-carousal">
        {results &&
          results.map((lctn) => {
            let { id, name } = lctn;

            return (
              <div key={id} className="locations-container">
                <div className="location-id">#{id}</div>
                <div className="location-name">{name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LocationCarousal;
