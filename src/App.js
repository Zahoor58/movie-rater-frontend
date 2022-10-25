import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/movie-list";

function App() {
  const [movies, setMovies] = useState(["Movie 1", "Movie 2"]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token bab9a0296938f8b1e19845b146e6ee86407f2fef",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setMovies(resp))
      .catch((error) => console.log(error));
  }, []);

  const movieClicked=movie=>{
    console.log(movie.title);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Rater </h1>
      </header>
      <div className="layout">
        <MovieList movies={movies} movieClicked={movieClicked} />
        <div> Movie Details </div>
      </div>
    </div>
  );
}

export default App;
