import React, { Component } from 'react'
import MovieDetails from './MovieDetails'

 class Thriller extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categoryID : 2
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
            <MovieDetails warn={this.state.isToggleOn && this.state.key} />
            </div>
            )
        }
        else{
        return (
            <div className="Main">
               {this.props.child.filter(key => (key.categoryId === this.state.categoryID)).map( filteredName => (
                    <div className="Item" key={filteredName.id}>
                    <img src= {filteredName.src} alt= {filteredName.name} onClick={() => this.handleClick(filteredName.id)}/>
                    <h2>{filteredName.name}</h2>
                    <h2>Rating : {filteredName.rating}</h2>
                    </div>
                    
                ))}  
            </div>
            
        )
               }
    }
}

export default Thriller
