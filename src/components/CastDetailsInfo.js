import React from "react";

const CastDetailsInfo = ({ results }) => {
  const castImage = results.filter((castImg) => {
    let { id, image, name } = castImg;
    return (
      <div key={id} className="cast">
        <div className="cast-name">{name}</div>
        <div className="cast-image">{image}</div>
      </div>
    );
  });

  const castStatus = results.filter((castStat) => {
    let { id, status } = castStat;
    return (
      <div key={id} className="status">
        {status}
      </div>
    );
  });

  const castSpecies = results.filter((castSpcies) => {
    let { id, species } = castSpcies;
    return (
      <div key={id} className="status">
        {species}
      </div>
    );
  });

  const castGender = results.filter((castGndr) => {
    let { id, gender } = castGndr;
    return (
      <div key={id} className="status">
        {gender}
      </div>
    );
  });

  const castOrigin = results.filter((castOrgn) => {
    let { id, origin } = castOrgn;
    return (
      <div key={id} className="status">
        {origin}
      </div>
    );
  });

  const castLocation = results.filter((castLctn) => {
    let { id, location } = castLctn;
    return (
      <div key={id} className="status">
        {location}
      </div>
    );
  });

  const castEpisodes = results.filter((castEpsd) => {
    let { id, episode } = castEpsd;
    return (
      <div key={id} className="status">
        {episode}
      </div>
    );
  });

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
        <div className="cast-episodes section-desc white">
          <div className="icon">icon</div>
          <div className="title">Episode(s)</div>
          <div className="status">{castEpisodes}</div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailsInfo;
