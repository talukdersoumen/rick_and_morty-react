import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import CastDetailsInfo from "../components/CastDetailsInfo";

function CastDetails() {
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
    <div className="CastDetails-body">
      <Logo />
      {fetchedData.results ? (
        <CastDetailsInfo results={fetchedData.results} />
      ) : null}
    </div>
  );
}

export default CastDetails;
