import React from 'react';
import Movie from './Movie.jsx'
//dynamically render from an array and return jsx fragement
var MappingOverMovies = (props) => (
    
<div>

    {props.movies.map((movie) => {
       return <Movie key={props.movies.indexOf(movie)} movieTitle={movie.title}/>
    })}
</div>
)
// when you import a 
export default MappingOverMovies;