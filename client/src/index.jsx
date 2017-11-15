import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MovieList from './components/MovieList.jsx';
import AddMovies from './components/AddMovies.jsx';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      watched: false
    };

    this.onClickToggleWatched = this.onClickToggleWatched.bind(this);
  }

  componentWillMount() {
    axios.get('/load').then((result) => {
      this.setState({ movies: result.data });
    });
  }

  onClickToggleWatched() {
    this.setState({ watched: true });
  }

  onClickToggleWatch() {
    this.setState({ watched: true });
  }

  onClickUpdateMovieList(value) {
    const films = this.state.movies.filter(movie =>
      movie.Title.includes(value)
    );
    this.setState({
      movies: films
    });
  }

  render() {
    return (
      <div>
        <div id="add-movies">
          <AddMovies />
        </div>
        <div className="top-container">
          <div className="watched-buttons">
            <button className="btn btn-secondary">Watched</button>
            <button className="btn btn-secondary">To Watch</button>
          </div>
          <div className="search-bar">
            <SearchBar
              updateMovies={value => this.onClickUpdateMovieList(value)}
            />
          </div>
        </div>
        <div className="movie-list-container">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));