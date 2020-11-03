import React, { Component } from 'react'
//import { MoviesData } from '../data'
import MovieDetails from './MovieDetails'

 class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //AdventureMovies : MoviesData,
            categoryID : 1
        }
        this.handleClick = this.handleClick.bind(this)
    } 
        handleClick(key) {
            this.setState(prevState => ({
              isToggleOn: !prevState.isToggleOn,
              key : key
            } 
            ));  
          }
      
    render() {
        if (this.state.isToggleOn) {
            return (
            <div>
            <button onClick={this.handleClick}>Click Back</button>
            <MovieDetails warn={this.state.isToggleOn && this.state.key} child={this.props.child} />
            </div>
            )
        }
        else{
        return (
            <div className="Main">
               {this.props.child.filter(key => (key.categoryId === this.state.categoryID)).map( filteredName => (
                    <div className="Item" key={filteredName.id}>
                    <img src= {filteredName.src} alt= {filteredName.name} onClick={() => this.handleClick(filteredName.id)} key={filteredName.id}/>
                    <h2>{filteredName.name}</h2>
                    <h2>Rating : {filteredName.rating}</h2>
                    </div>
                ))}  
            </div>
            
        )}
    }
}

export default Adventure

