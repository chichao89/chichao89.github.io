import React, { Component } from 'react'
import { MoviesData } from '../data'
import LatestMovies from './LatestMovies'
import Adventure from './Adventure'
import Thriller from './Thriller'

class Movies extends Component {
    
    constructor(props){
        let url = props.location.pathname
        const urlpath = parseInt((url.match(/(\d+)/g)));
        super(props);
        this.state = {
            myMovies : MoviesData,
            Latest : 1,
            Adventure : 2,
            Thriller : 3,
            myURL : urlpath,
            switchButton : true
        }  
    }

    render() {    
        switch(this.state.switchButton){
            case  this.state.Latest === this.state.myURL : {
                return <LatestMovies child={this.state.myMovies}/>
            }
            case this.state.Adventure === this.state.myURL : {
                return <Adventure child={this.state.myMovies}/>
            }
            case this.state.Thriller === this.state.myURL : {
                return <Thriller child={this.state.myMovies}/>
            }
            default :
            return <LatestMovies child={this.state.myMovies}/>
        }
    }
}

export default Movies



// function Movies() {
//         const latestMovies = [
//             {
//                 id: 1,
//                 src :  logo1,
//                 name: 'Double World',
//                 category: 'adventure',
//                 rating: 7.3
//             },
//             {
//                 id: 2,
//                 src : logo2,
//                 name: 'The Bridge Curse',
//                 category: 'thriller',
//                 rating: 5.3           
//             },
//             {
//                 id:3,
//                 src : logo3,
//                 name: 'Like a Boss',
//                 category: 'thriller',
//                 rating: 8.0
//             },
//             {
//                 id:4,
//                 src : logo4,
//                 name: 'Romance Doll',
//                 category: 'adventure',
//                 rating: 5.0
//             },
//             {
//                 id:5,
//                 src : logo5,
//                 name: 'A Whisker Away',
//                 category: 'thriller',
//                 rating: 8.6
//             },
//             {
//                 id:6,
//                 src : logo6,
//                 name: 'Harley Quinn: Birds of Prey',
//                 category: 'thriller',
//                 rating: 9.0
//             },
//             {
//                 id:7,
//                 src : logo7,
//                 name: 'The Last Thing He Wanted',
//                 category: 'adventure',
//                 rating: 9.0
//             },
//             {
//                 id:8,
//                 src : logo8,
//                 name: 'DoLittle',
//                 category: 'adventure',
//                 rating: 4.5
//             },
//             {
//                 id:9,
//                 src : logo9,
//                 name: 'Scoob',
//                 category: 'adventure',
//                 rating: 6.1
//             },
//             {
//                 id:10,
//                 src : logo10,
//                 name: 'Sonic The HedgeHog',
//                 category: 'adventure',
//                 rating: 7.1
//             },
//             {
//                 id:11,
//                 src : logo11,
//                 name: 'The Call of the Wild',
//                 category: 'adventure',
//                 rating: 4.5
//             },
//             {
//                 id:12,
//                 src : logo12,
//                 name: 'Onward',
//                 category: 'adventure',
//                 rating: 9.5
//             }
//         ]
        
//         const movieList = latestMovies.map(latest => (<LatestMovies key={latest.id} latest={latest}/>))
//         //const adventureList = latestMovies.map(adventure => (<Adventure key={adventure.id} Adventure={adventure}/>)) 
//         return <div className="Main">{movieList}</div>     
//     }
// export default Movies;
