import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../components/Logo";
import CastDetailsInfo from "../components/CastDetailsInfo";

function CastDetails() {
  const { id } = useParams();
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    async function fetchCastData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      setCastData(data);
    }

    fetchCastData();
  }, [id]);

  return (
    <div className="CastDetails-body">
      <Logo />
      {castData ? <CastDetailsInfo results ={castData} /> : null}
    </div>
  );
}

export default CastDetails;
