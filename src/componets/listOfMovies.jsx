import React from 'react';
import Movie from './Movie.jsx'
//dynamically render from an array and return jsx fragement
var MappingOverMovies = (props) => (

<div>

    {props.movies.map((movie, index) => {
        if(movie.watched === true) {
            return <Movie key={index.toString()} movieTitle={movie.title} toggle={props.toggle} movie={movie}/>
        } else {
        movie.watched = false
            return <Movie key={index.toString()} movieTitle={movie.title} toggle={props.toggle} movie={movie}/>
        }
    })}
</div>
)
// when you import a 
export default MappingOverMovies;