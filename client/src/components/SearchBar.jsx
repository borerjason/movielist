import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    return <div className="form-container">
      <input 
        className="form-control" 
        placeholder="Search..." 
        value={this.state.value}
        onChange={event => this.setState({value:event.target.value})} 
      />
      <button 
        type="submit" 
        className="btn btn-primary go"
        onClick={() => this.props.updateMovies(this.state.value)}
        >
        Go!
      </button>
    </div>;
  }
}


export default SearchBar;  