import React from 'react';


class AddMovie extends React.Component{
    // Add constructor
    constructor (props) {
        // create a state
        super(props) // inherit props from app 
        this.state = {
            add: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }
  handleChange(event) {
    event.preventDefault();
    this.setState({add: event.target.value})
  }
  addMovie(event) {
      event.preventDefault();
     this.props.handleAdd(this.state.add)
  }

  render() {
    return (
        <form>
            <input type='text' value={this.state.value} onChange={this.handleChange}></input>
            <input type='submit' value='Add' onClick={this.addMovie}></input>
        </form>
    );
    }

}

export default AddMovie;
