import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(pros)

    this.state = {
      value: ''; 
    }
  }
}

const SearchBar = (props) => {
  return (
    <div className ="form-container">
      <input className="form-control" placeholder="Search..."/>
      <button
      
        value ={this.state.value}  
        type="submit" 
        className="btn btn-primary go">Go!</button>
    </div>
  )
}


export default SearchBar;  