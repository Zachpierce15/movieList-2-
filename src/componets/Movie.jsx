import React from 'react';

const Movie = (props) => (
 <div>
    <div className="list" > 

      {props.movieTitle}

      <div>
      
        <button id='watchedButton' >Watched</button>

      </div>

    </div>


 </div>
);

export default Movie