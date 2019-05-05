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
            userAdded: [],
            toWatch: this.props.movies ,
            watched: []
        }
        // it's also best practice to bind functions here
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        //lifecycle methods 
          // this is where we want to put code that we want to execute at a specific 
          // time in a components lifecycle 

    }
    //methods that can change the state!!!!!!!
    handleSearch(query) {
        this.setState({query: query}, this.filteredList);
    };
    
    filteredList(query) {
        query = this.state.query
        var filteredArray = this.state.displayList.filter((element) => {
            if (element.title.toLowerCase().includes(query.toLowerCase())) {
                return true
            } 
        })
        this.setState({movieList: filteredArray})
    };

    handleAdd(movie) {
        var copyOfMovies = this.state.userAdded;
        //make date object to be add to the movielist
       var movieObj = {};
        //add a title property
       movieObj.title = movie
       copyOfMovies.push(movieObj)
       //add new data to the toWatch
       this.setState({toWatch: copyOfMovies})
       //add new data to the userAdded
       this.setState({userAdded: copyOfMovies})
       //add new data to the movieList
       this.setState({movieList: this.state.userAdded})
    };

    filterWatched() {

    }
    // this is where we put functions to manipulate this classese state(handler events)
 
  render () {
    return (
    <div>
        <h1 className="title">Movielist!!</h1>

        <AddMovie handleAdd={this.handleAdd}/>
        <SearchBar handleSearch={this.handleSearch} />
        <button className='filterWatched' >Watched</button>
        <button className='filterToWatched' >To Watch</button>
        <MappingOverMovies movies={this.state.movieList} />
    </div>
        
        )
  }
}
export default App;