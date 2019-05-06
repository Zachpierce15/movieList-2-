import React from 'react';
import Movie from './Movie.jsx'
//dynamically render from an array and return jsx fragement
class MappingOverMovies extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            selectedPanel: null
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler(index) {
        this.setState({selectedPanel: index})
    }
    render() {
        return  (
        
        <div>
        
            {this.props.movies.map((movie, index) => {
                if(movie.watched === true) {
                    return <Movie key={index}  showPanel={this.state.selectedPanel === index ? true:false} clicked={() => this.onClickHandler(index)} toggle={this.props.toggle} movie={movie}/>
                } else {
                movie.watched = false
                    return <Movie key={index} showPanel={this.state.selectedPanel === index ? true:false} clicked={() => this.onClickHandler(index)} toggle={this.props.toggle} movie={movie}/>
                }
            })}
        </div>
        )
    }
}
// when you import a 
export default MappingOverMovies;