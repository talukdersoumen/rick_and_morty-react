import React from "react";
import Logo from "../components/Logo";
import Section01 from "../components/Home/Section01";
import CastCarousal from "../components/Home/CastCarousal";
import EpisodeCarousal from "../components/Home/EpisodeCarousal";
import LocationCarousal from "../components/Home/LocationCarousal";

function Home() {
  return (
    <div className="home">
      <Logo />
      <Section01 />
      <CastCarousal />
      <EpisodeCarousal />
      <LocationCarousal />
    </div>
  );
}
export default Home;
