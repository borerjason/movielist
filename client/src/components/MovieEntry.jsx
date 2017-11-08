import React from 'react';

const MovieEntry = ( {movie} ) => {
  return (
    <div className="movie-entry-container">
      <div className="movie-sub-container">
        {movie.title}
      </div>

    </div> 
  )
}

export default MovieEntry;