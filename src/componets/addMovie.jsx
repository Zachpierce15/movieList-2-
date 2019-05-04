import React from 'react';


class AddMovie extends React.Component{
    // Add constructor
    constructor (props) {
        // create a state
        super(props) // inherit props from app 
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
  handleChange(event) {
    event.preventDefault();
    this.setState({add: event.target.value})
  }
  handleAdd(event) {
      
  }

  render() {
    return (
        <form>
            <input type='text' value={this.state.value} onChange={this.handleChange}></input>
            <input type='submit' value='Add'></input>
        </form>
    );
    }

}

export default AddMovie;
