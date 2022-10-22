import "./App.css";
import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState(["Movie 1", "Movie 2"]);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Movie Rater </h1>
      </header>
      <div className="layout">
        <div>
          {movies.map((movie) => {
            return <h1>{movie}</h1>
          })}
        </div>
        <div>Movie Details</div>
      </div>
    </div>
  );
}

export default App;
