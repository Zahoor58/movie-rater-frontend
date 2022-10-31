import React from "react";


function MovieForm(props){
    return(
        <h1>{props.movie && props.movie.title} Edit</h1>
    )
}
export default MovieForm;