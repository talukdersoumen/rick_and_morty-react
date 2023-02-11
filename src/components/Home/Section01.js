import React from "react";

const Section01 = () => {
  return (
    <div className="home-section-1">
      <div className="logo">
        <img
          src="./images/Logo.png"
          alt="logo"
          height={"48px"}
          width={"227px"}
        />
      </div>
      <div className="heading-container">
        <div className="heading-bottom">
          <div className="heading-button">
            <img src="./images/Home/Vector.png" alt="play" />
            <a
              href="https://youtu.be/KQ9Cgdsa9tc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </div>
          <div className="heading-bottom-description">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </div>
        </div>
        <div className="heading-title"> 
            <div className="bubble">
                <img src="./images/Home/Hero/bubble.png" alt="bubble" height={"150px"} width={"150px"} />
            </div>
          <div className="inline"><span className="white extra-bold">THE</span>
          <img src="./images/Home/Hero/portal.png" alt="portal" width={"100px"} height={"70px"} />
          <span className="gradient normal">
            RICK & <br /> 
            MORTY
          </span> </div>
          <span className="inline white extra-bold">WIKI</span>
          <div className="gun">
            <img src="./images/Home/Hero/Gun.png" alt="gun" height={"100px"} width={"200px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
