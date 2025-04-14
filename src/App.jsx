import React, { useEffect, useState } from 'react'
import './App.css';
import Card from './Card.jsx';

const data = [
  {
    poster: "https://image.tmdb.org/t/p/original/hu4psJoKxDYezvvS4GlLF531fom.jpg",
    image: "https://image.tmdb.org/t/p/original/whkT53Sv2vKAUiknQ13pqcWaPXB.jpg",
    name: "Bright",
    release: "2017, David Ayer",
    duration: "117 mins",
    type: "Action Crime Fancy",
    description: "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for."
  },
  {
    poster: "https://image.tmdb.org/t/p/original/ohijjhvNqAPKTURQr6VIF7xuAjY.jpg",
    image: "https://image.tmdb.org/t/p/original/s4Qn5LF6OwK4rIifmthIDtbqDSs.jpg",
    name: "Tomb Raider",
    release: "2018, Roar Uthaug",
    duration: "117 mins",
    type: "Action Crime Fancy",
    description: "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
  },
];

function App() {
  // HERE I WAS FETCHING DATA FROM MOVIE API
  // const API_KEY = "b68cd8803f76c38479a47b7a2077e5e8"; //for adding api we add this: &api_key=
  // const toCompleteURL = "https://image.tmdb.org/t/p/original"; 
  // const fetchApiData = async (url) => {
  //   try{
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     console.log(result.results);
  //   } 
  //   catch(error) {
  //     console.log(error);
  //   }
  // }
  
  // useEffect(()=>{
  //   fetchApiData(("https://api.themoviedb.org/3/search/movie?query=" + `${"tomb raider"}` + "&include_adult=false&language=en-US&page=1&api_key="+ API_KEY));
  // })

  const [arr, setArr] = useState(data);

  return (
    <>
      <div className="main">
        <Card arr={arr} />
      </div>
    </>
  )
}

export default App;
