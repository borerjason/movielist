import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MovieList from './components/MovieList';
import AddMovies from './components/AddMovies';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      view: 'all',
    };

    this.onClickToggleWatched = this.onClickToggleWatched.bind(this);
    this.onClickToggleToWatch = this.onClickToggleToWatch.bind(this);
    this.movieView = this.movieView.bind(this);
  }

  componentDidMount() {
    axios.get('/load')
      .then(() => {
        axios.get('/movies').then((movies) => {
          this.setState({ movies: movies.data });
        });
      });
  }

  onClickToggleWatched() {
    this.setState({
      view: 'watched',
    });
  }

  onClickToggleToWatch() {
    this.setState({ view: 'notwatched' });
  }

  onClickUpdateMovieList(value) {
    const films = this.state.movies.filter(movie =>
      movie.TITLE.toLowerCase().includes(value.toLowerCase()));

    this.setState({
      movies: films,
    });
  }

  movieView() {
    if (this.state.view === 'watched') {
      const films = this.state.movies.filter(movie =>
        !movie.Watched);
      return films;
    } else if (this.state.view === 'notwatched') {
      const films = this.state.movies.filter(movie =>
        !!movie.Watched);
      return films;
    }
    return this.state.movies;
  }

  render() {
    return (
      <div>
        <div id="add-movies">
          <AddMovies />
        </div>
        <div className="top-container">
          <div className="watched-buttons">
            <button
              className="btn btn-secondary"
              onClick={this.onClickToggleWatched}
            >Watched
            </button>
            <button
              className="btn btn-secondary"
              onClick={this.onClickToggleToWatch}
            >To Watch
            </button>
          </div>
          <div className="search-bar">
            <SearchBar
              updateMovies={value => this.onClickUpdateMovieList(value)}
            />
          </div>
        </div>
        <div className="movie-list-container">
          <MovieList movies={this.movieView()} watched={this.state.watched} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
