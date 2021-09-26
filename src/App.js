import "./styles.css";
import { useState } from "react";

var genreCollection = {
  rock: [
    { name: "With or Without You - U2", rating: "5/5" },
    { name: "August - Taylor Swift & Bon Iver", rating: "4.5/5" }
  ],
  pop: [
    { name: "Kiss Me - Sixpence none the richer", rating: "5/5" },
    { name: "No Promises - Demi Lovato", rating: "3/5" }
  ],
  indie: [
    { name: "Exile - Taylor Swift", rating: "5/5" },
    { name: "Betty - Taylor Swift", rating: "3.5/5" }
  ],
  rb: [
    { name: "Blinding Lights - The Weekend", rating: "5/5" },
    { name: "At my worst - Pink Sweats", rating: "4/5" }
  ]
};
export default function App() {
  var [genre, setGenre] = useState("rock");
  var rockKey = Object.keys(genreCollection);
  function onClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="this is a music emoji">
          🎵
        </span>
        goodmusic
      </h1>
      <h3>Check out my favourite songs! Select a genre to get started</h3>
      {rockKey.map((genre) => (
        <button key={genre} onClick={() => onClickHandler(genre)}>
          {genre}
        </button>
      ))}
      <div>
        <ul>
          {genreCollection[genre].map((song) => (
            <div key={song.name}>
              {" "}
              <div>{song.name}</div>
              <div>{song.rating}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
