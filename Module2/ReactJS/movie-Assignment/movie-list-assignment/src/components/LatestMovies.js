import React, { Component } from 'react'
//import { MoviesData } from '../data'
import MovieDetails from './MovieDetails'

class LatestMovies extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            //all : MoviesData,
            isToggleOn : false          
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
            {this.props.child.map(key => (
               <div className="Item" key={key.id}>
               <img src= {key.src} alt= {key.name} onClick={() => this.handleClick(key.id)} key={key.id}/>
               <h2>{key.name}</h2>
               <h2>Rating : {key.rating}</h2>
               </div>       
             ))}
            </div>           
        )}
    }
}

export default LatestMovies
