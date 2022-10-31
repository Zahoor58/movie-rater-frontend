import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTrash } from "@fortawesome/free-solid-svg-icons";

function MovieList(props) {
  const movieClicked=movie=>evt=>{
    props.movieClicked(movie);
  }
  const EditClicked=movie=>{
    props.EditClicked(movie)
  }
  return (
    <div>
      {props.movies && props.movies.map((movie,index) => {
          return (
            <div key={index}>
            <h1 onClick={movieClicked(movie)}> {movie.title} </h1>
            <FontAwesomeIcon icon={faEdit} onClick={()=>EditClicked(movie)}/>
            <FontAwesomeIcon icon={faTrash}/>
            </div>
          )
        })}
    </div>
  );
}

export default MovieList;
