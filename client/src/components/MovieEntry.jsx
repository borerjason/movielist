import React from 'react';
import PropTypes from 'prop-types';

const MovieEntry = ({ movie }) =>
  (
    <div className="movie-entry-container">
      <div className="movie-sub-container">
        {movie.TITLE}
      </div>
      <div>
        <button
          className="btn btn-success"
          onClick={() => {movie.Watched = !movie.Watched; }}
        >watched
        </button>
      </div>
    </div>
  );

export default MovieEntry;
