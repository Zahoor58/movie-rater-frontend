import React from "react";

function MovieList(props) {
  const movieClicked=movie=>evt=>{
    props.movieClicked(movie);
  }
  return (
    <div>
      {props.movies && props.movies.map((movie,index) => {
          return (
            <div key={index}>
            <h1 onClick={movieClicked(movie)}> {movie.title} </h1>
            </div>
          )
        })}
    </div>
  );
}

export default MovieList;
