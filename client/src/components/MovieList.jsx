import React from 'react';
import MovieEntry from './MovieEntry';

const MovieList = ({ movies, watched }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) =>
        <MovieEntry movie={movie} key={index} />)}
    </div>
  );
};

export default MovieList;
