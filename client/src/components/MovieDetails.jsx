import React from 'react';

const MovieDetails = props => (
  <div>
    <div>
      {console.log(props)}
      Release Date: {props.movie.release_date}   
    </div>
    <div>
      Popularity Score: {props.movie.Popularity}
    </div>
  </div>
);
export default MovieDetails;
