import React from 'react'
import { MoviesData } from '../data'
function MovieDetails(props) {

    
    const movie = MoviesData.filter(key => (key.id === props.warn)).map( filteredName => (
        <article key={filteredName.id}>
        <div className="MDetails"><img src= {filteredName.src2} alt= {filteredName.name} key={filteredName.id}/></div>
        <h1 className="hColor">{filteredName.name}</h1>
        <div className="wrap">Details</div>
        <section className="sSection">
        <div className="left">Director:</div><div> {filteredName.director}</div>
        <div className="left">Cast:</div><div> {filteredName.cast}</div>
        <div className="left">Category:</div><div>{filteredName.category}</div>
        <div className="left">Release Date:</div><div> {filteredName.releasedate}</div>
        <div className="left">Censorship:</div><div> {filteredName.censorship}</div>
        <div className="left">Rating:</div><div> {filteredName.rating}</div>
        <div className="left">Time:</div><div>{filteredName.time}</div>
        </section>
        <div className="wrap1">Synopsis</div>
        <div className="word">{filteredName.synopsis}</div> 
        </article>           
      ))
      
    if (!props.warn) {
        return null;
      }
    return (
        <div className="warning">
            {movie}
        </div>
    )
}

export default MovieDetails
