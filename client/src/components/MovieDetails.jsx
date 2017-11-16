import React from 'react';

const MovieDetails = props => (
  <div>
    <div>
      {console.log(props)}
      Release Date: {props.movie.Date}   
    </div>
    <div>
      Popularity Score: {props.movie.Popularity}
    </div>
  </div>
);
export default MovieDetails;
