import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card.jsx";
import axios from "axios";

// const data = [
//   {
//     poster: "https://image.tmdb.org/t/p/original/hu4psJoKxDYezvvS4GlLF531fom.jpg",
//     image: "https://image.tmdb.org/t/p/original/whkT53Sv2vKAUiknQ13pqcWaPXB.jpg",
//     name: "Bright",
//     release: "2017, David Ayer",
//     duration: "117 mins",
//     type: "Action Crime Fancy",
//     description: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
//   },
//   {
//     poster: "https://image.tmdb.org/t/p/original/ohijjhvNqAPKTURQr6VIF7xuAjY.jpg",
//     image: "https://image.tmdb.org/t/p/original/s4Qn5LF6OwK4rIifmthIDtbqDSs.jpg",
//     name: "Tomb Raider",
//     release: "2018, Roar Uthaug",
//     duration: "117 mins",
//     type: "Action Crime Fancy",
//     description: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
//   },
// ];

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  // HERE I WAS FETCHING DATA FROM MOVIE API
  const API_KEY = "b68cd8803f76c38479a47b7a2077e5e8"; //for adding api we add this: &api_key=
  const toCompleteURL = "https://image.tmdb.org/t/p/original";

  async function handleData() {
    const result = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=" +
        `${name}` +
        "&include_adult=false&language=en-US&page=1&api_key=" +
        API_KEY
    );
    setData(result.data.results);

    setName("");
  }

  return (
    <>
      <div className="inputBox">
        <h1>Search Your Favorite Movie </h1>
        <div className="inpt">
          <input
            type="text"
            placeholder="Enter a movie name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleData}>Search</button>
        </div>
      </div>
      <div className="main">
        <Card arr={data} url={toCompleteURL} />
      </div>
    </>
  );
}

export default App;
