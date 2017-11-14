import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import movies from '../../database/data.js'
import MovieList from './components/MovieList.jsx';
import AddMovies from './components/AddMovies.jsx';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      movies: []     
    }
  }

  componentWillMount() {
    axios.get('/movies')
    .then((result) => {
      this.setState({ movies: result.data })
      });
  }

  onClickUpdateMovieList (value) {
    let movies = this.state.movies.filter(movie => {
      return movie.title.includes(value); 
    });
    this.setState({
      movies: movies
    });
  }

  render() {
    return (

      <div>
      <div id="add-movies">
        <AddMovies />
      </div>
      <div className="search-bar">
        <SearchBar 
          updateMovies={(value)=> this.onClickUpdateMovieList(value)}/> 
      </div>
      <div className='movie-list-container'>
       <MovieList
         movies={this.state.movies}/>
      </div>
    </div>
    
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('app'));