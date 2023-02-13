import React from "react"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/"><img src="./images/Logo.png" alt="logo" height={"48px"} width={"227px"} /></Link>
    </div>
  );
};

export default Logo;
