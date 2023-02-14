import React from "react";

const CastDetailsInfo = ({ results }) => {
  const castImage = (
    <div className="cast">
      <div className="cast-name">{results.name}</div>
      <div className="cast-image">
        <img src={results.image} alt="characterImage" />
      </div>
    </div>
  );

  const castStatus = (
    <div className="status">
      {results.status}
    </div>
  );

  const castSpecies = (
    <div className="status">
      {results.species}
    </div>
  );

  const castGender = (
    <div className="status">
      {results.gender}
    </div>
  );

  const castOrigin = (
    <div className="status">
      {results.origin.name}
    </div>
  );

  const castLocation = (
    <div className="status">
      {results.location.name}
    </div>
  );

  // const castEpisodes = results.episode.map((episode, i) => (
  //   <div key={i} className="status">
  //     {episode}
  //   </div>
  // ));

  return (
    <div className="CastDetails-container">
      {castImage}

      <div className="separator"></div>

      <div className="details">
        <div className="details-toprow">
          <div className="cast-status toprow-sections section-desc white">
            <div className="icon">icon</div>
            <div className="title">Status</div>
            {castStatus}
          </div>

          <div className="cast-species toprow-sections section-desc white">
            <div className="icon">icon</div>
            <div className="title">Species</div>
            {castSpecies}
          </div>
          <div className="cast-gender toprow-sections section-desc white">
            <div className="icon">icon</div>
            <div className="title">Gender</div>
            {castGender}
          </div>
        </div>
        <div className="cast-origin details-row section-desc white">
          <div className="icon">icon</div>
          <div className="title">Origin</div>
          {castOrigin}
        </div>
        <div className="cast-location details-row section-desc white">
          <div className="icon">icon</div>
          <div className="title">Last Known Location</div>
          {castLocation}
        </div>
        {/* <div className="cast-episodes section-desc white">
          <div className="icon">icon</div>
          <div className="title">Episode(s)</div>
          <div className="status">{castEpisodes}</div>
        </div> */}
      </div>
    </div>
  );
};

export default CastDetailsInfo;
