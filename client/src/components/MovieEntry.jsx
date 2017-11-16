import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from './MovieDetails';

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    };
  }

  render() {
    return ( 
      <div>
        <div className="movie-entry-container">
          <div className="movie-sub-container">
            <a href="#" onClick={() => this.setState({
                  expand: !this.state.expand
                })}>
              {this.props.movie.TITLE}
            </a>
          </div>
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.movie.Watched = !this.props.movie.Watched;
              }}
            >
              watched
            </button>
          </div>
        </div>
        {this.state.expand && <MovieDetails movie={this.props.movie} />}
      </div>
    );
  }
}

MovieEntry.propTypes = {
  movie: PropTypes.object,
};

export default MovieEntry;
