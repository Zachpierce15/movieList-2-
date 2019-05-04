//import react
import React from 'react'
import MappingOverMovies from './listOfMovies.jsx'
import SearchBar from './SearchBar.jsx'
import AddMovie from './addMovie.jsx'

class App extends React.Component {
    //create a constructor
    // this is where the state exists
    //this is where props are added
    constructor(props) {
        super(props) // inherit props and react componet methods
        this.state = {
            displayList: this.props.movies,
            query: '',
            movieList: this.props.movies,
        }
        // it's also best practice to bind functions here
        this.handleSearch = this.handleSearch.bind(this);
        this.addMovie = this.addMovie.bind(this);
        //lifecycle methods 
          // this is where we want to put code that we want to execute at a specific 
          // time in a components lifecycle 

    }
    handleSearch(query) {
        this.setState({query: query}, this.filteredList);
    }
    filteredList(query) {
        query = this.state.query
        var filteredArray = this.state.displayList.filter((element) => {
            if (element.title.toLowerCase().includes(query.toLowerCase())) {
                return true
            } 
        })
        this.setState({movieList: filteredArray})
    }
    addMovie(movie) {
        //make date object to be add to the movielist
       var movieObj = {};
        //add a title property
       movieObj[title] = movie
       //add new data to the movieList
        this.state.movieList.push(movieObj)
    }
    //methods
    // this is where we put functions to manipulate this classese state(handler events)
 
  render () {
    return (
    <div>
        <h1 className="title">Movielist!!</h1>
        <AddMovie />
        <SearchBar handleSearch={this.handleSearch} />
        <MappingOverMovies movies={this.state.movieList} />
    </div>
        
        )
  }
}
export default App;