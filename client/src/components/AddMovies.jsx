import React from 'react';

class AddMovies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      val:''
    }
  }

  render() {
    return (
      <div>
        <div>
          <input className="form-input" placeholder="Add Movies" value={this.state.val}></input>
          <button className="btn btn-success">Add</button>
        </div>
      </div>
    )
  }
}

export default AddMovies;