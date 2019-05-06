import React from 'react';

const Movie = (props) => (
 <div>
    <div className="list" > 

      <span onClick={() => props.clicked()}>{props.movie.title}</span>


    </div>
      <div id='watchedButton'>
      
        <button id='watchedButton' onClick={() => props.toggle(props.movie)}>Watched</button>

      </div>


 </div>
);

export default Movie