import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import CharacterCards from "../components/CharacterCards";

function Casts() {
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
    <div className="Casts-body">
      <Logo />
      {fetchedData.results ? (
        <CharacterCards results={fetchedData.results} />
      ) : null}
    </div>
  );
}

export default Casts;
