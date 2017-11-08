import React from 'react';
import ReactDOM from 'react-dom';

import movies from '../../database/data.js'
import MovieList from './components/MovieList.jsx';
// import MovieEntry from './components/MovieEntry';
import SearchBar from './components/SearchBar.jsx';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      movies: window.movies      
    }

  }

  render() {
    return (

      <div>
      <div id='search-bar'>
        <SearchBar /> 
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