import "./styles.css";
import { useState } from "react";

var genreCollection = {
  rock: [
    {
      name: "With or Without You",
      rating: "5/5",
      desc: "This song is sung by U2 band and this song is in key D Major!"
    },
    {
      name: "Fix You",
      rating: "5/5",
      desc:
        "This song is sung by Coldplay band and this song is in key E-Flat Major!"
    },
    {
      name: "August",
      rating: "4.5/5",
      desc: "This song is sung by Taylor Swift and this song is in key F Major!"
    }
  ],
  pop: [
    {
      name: "Kiss Me",
      rating: "5/5",
      desc:
        "This song is sung by Sixpence none the richer band and this song is in key D# Major!"
    },
    {
      name: "Work",
      rating: "4.5/5",
      desc:
        "This song is sung by Rihanna and Drake, and this song is in key B Major!"
    },
    {
      name: "No Promises",
      rating: "3/5",
      desc:
        "This song is sung by Demi Lovato and Cheat Codes, and this song is in key A# Major!"
    }
  ],
  indie: [
    {
      name: "Exile",
      rating: "5/5",
      desc:
        "This song is sung by Taylor Swift and Bon Iver, and this song is in key F# Major!"
    },
    {
      name: "A Sky Full of Stars",
      rating: "4.5/5",
      desc: "This song is sung by Coldplay and this song is in key F# Major!"
    },
    {
      name: "Betty",
      rating: "3.5/5",
      desc: "This song is sung by Taylor Swift and this song is in key C Major!"
    }
  ],
  rb: [
    {
      name: "Blinding Lights",
      rating: "5/5",
      desc: "This song is sung by The Weekend and this song is in key C# Major!"
    },
    {
      name: "South of the Border",
      rating: "5/5",
      desc:
        "This song is sung by Ed Sheeran and Camila Cabello and Cardi B, and this song is in key A Minor!"
    },
    {
      name: "At my worst",
      rating: "4/5",
      desc:
        "This song is sung by Pink Sweats and Kehlani, and this song is in key C Major!"
    }
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
        <button
          style={{
            fontSize: "1.2rem",
            padding: "0.5rem",
            margin: "1rem",
            borderRadius: "10%",
            width: "5rem",
            borderStyle: "none",
            cursor: "pointer"
          }}
          key={genre}
          onClick={() => onClickHandler(genre)}
        >
          {genre}
        </button>
      ))}
      <div>
        <ul>
          {genreCollection[genre].map((song) => (
            <div className="output" key={song.name}>
              {" "}
              <div className="desc">{song.name}</div>
              <div className="desc">{song.desc}</div>
              <div className="desc">{song.rating}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
