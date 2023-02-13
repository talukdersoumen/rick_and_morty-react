import React from "react";
import Logo from "../components/Logo";

function CastDetails() {
  return (
    <div className="CastDetails-body">
      <Logo />
      <div className="CastDetails-container">
        <div className="cast">
          <div className="cast-name">rick sanchez</div>
          <div className="cast-image"></div>
        </div>
        <div className="separator"></div>
        <div className="details">
          <div className="details-toprow">
            <div className="cast-status toprow-sections section-desc white">
              <div className="icon">icon</div>
              <div className="title">Status</div>
              <div className="status">Alive</div>
            </div>
            <div className="cast-species toprow-sections section-desc white">
              <div className="icon">icon</div>
              <div className="title">Species</div>
              <div className="status">Human</div>
            </div>
            <div className="cast-gender toprow-sections section-desc white">
              <div className="icon">icon</div>
              <div className="title">Gender</div>
              <div className="status">Male</div>
            </div>
          </div> 
          <div className="cast-origin details-row section-desc white">
            <div className="icon">icon</div>
            <div className="title">Origin</div>
            <div className="status">Earth (C-137)</div>
          </div>
          <div className="cast-location details-row section-desc white">
            <div className="icon">icon</div>
            <div className="title">Last Known Location</div>
            <div className="status">Citadel of Ricks</div>
          </div>
          <div className="cast-episodes section-desc white">
            <div className="icon">icon</div>
            <div className="title">Episode(s)</div>
            <div className="status">
              <ul>  
                <li>Pilot</li> 
                <li>Lawnmower Dog</li> 
                <li>Anatomy Park</li> 
                <li>M. Night Shaym-Aliens!</li> 
                <li>Meeseeks and Destroy </li> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastDetails;
