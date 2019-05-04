import React from 'react';
class SearchBar extends React.Component{
    //constructor
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this);
    }
    // methods 
   handleChange(event) {
      // console.log(event.target.value)
    this.setState({value: event.target.value})
    } 
    
    submit(event) {
      event.preventDefault();
      this.props.handleSearch(this.state.value);
    }
    // lifeCycle methods
  render () {
      return (
        <form>
            <input type='text' value={this.state.value} onChange={this.handleChange} ></input>
            <input type='submit' value='Submit' onClick={this.submit}></input>
        </form>
      );
  }
    // render -- required 

}

export default SearchBar;

// creating a form in react 
  //forms in react are generally class componets by default