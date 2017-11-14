import React from 'react';

class MovieEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      watched: false,
    } 
  }


  render() {
    return (
      <div className="movie-entry-container">
      <div className="movie-sub-container">
        {this.props.movie.Title}
      </div>
      <div>
        <button 
          className="btn btn-success"
          onClick={() => this.setState({watched: !this.state.watched })}
        >watched</button>
      </div>
    </div>
   )
  }
}

export default MovieEntry;