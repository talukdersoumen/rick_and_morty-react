// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Casts = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     axios.get("https://rickandmortyapi.com/api/character")
//       .then(res => {
//         setCharacters(res.data);
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }, []);

//   return (
//     <div className="grid-container">
//       {characters.map(character => (
//         <div className="grid-item">
//           {/* Render character information */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Casts;

import React from "react";
import Logo from "../components/Logo";

function Casts() {
  return (
    <div className="Casts-body">
      <Logo />

      <div className="container-title">The Cast</div>
      <div className="grid-container">
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 1</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 2</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 3</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 4</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 5</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 6</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 7</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 8</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 9</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 10</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 11</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 12</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 13</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 14</div>
        </div>
        <div className="character-card">
          <div className="character-card-img"></div>
          <div className="character-name">Character 15</div>
        </div>
      </div>
    </div>
  );
}

export default Casts;
