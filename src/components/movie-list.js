import React from "react";


function MovieList(props){
    return (
        <div>
          {props.movies && props.movies.map((movie) => {
            return <h1>{movie.title}</h1>;
          })}
        </div>
    )
}

export default MovieList;