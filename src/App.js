import React from "react";
import "./App.css";
import "./fonts/TTTravels-Black.ttf";
import "./fonts/TTTravels-BlackItalic.ttf";
import "./fonts/TTTravels-Bold.ttf";
import "./fonts/TTTravels-BoldItalic.ttf";
import "./fonts/TTTravels-DemiBold.ttf";
import "./fonts/TTTravels-DemiBoldItalic.ttf";
import "./fonts/TTTravels-ExtraBold.ttf";
import "./fonts/TTTravels-ExtraBoldItalic.ttf";
import "./fonts/TTTravels-ExtraLight.ttf";
import "./fonts/TTTravels-ExtraLightItalic.ttf";
import "./fonts/TTTravels-Italic.ttf";
import "./fonts/TTTravels-Light.ttf";
import "./fonts/TTTravels-LightItalic.ttf";
import "./fonts/TTTravels-Medium.ttf";
import "./fonts/TTTravels-MediumItalic.ttf";
import "./fonts/TTTravels-Regular.ttf";
import "./fonts/TTTravels-Thin.ttf";
import "./fonts/TTTravels-ThinItalic.ttf";
import Logo from "./components/Logo.js"
import Section01 from "./components/Home/Section01";
import Section02 from "./components/Home/Section02";
import Section03 from "./components/Home/Section03";
import Section04 from "./components/Home/Section04";

function App() {
  return (
    <div className="home">
      <Logo />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </div>
  );
}
export default App;