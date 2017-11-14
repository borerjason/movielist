import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = ( {movies} ) => {
  console.log('MOVIES', movies);
  return (

  <div className="movie-list">
    {movies.map((movie, index) => {
      return <MovieEntry movie={movie} key={index}/>
    })}
  </div>
  );
}



export default MovieList;