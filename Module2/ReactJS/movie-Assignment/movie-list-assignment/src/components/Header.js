import React from 'react'
import logo from '../image/movie.jpg'
import { 
    NavLink,
    HashRouter } from 'react-router-dom'

function Header() {

    const id = [1,2,3];
    return (
        <div>
            <header className='Header'>
                 <img src={logo} className="Logo" alt="logo" />
                 <HashRouter>
                 <nav className="Nav">
                    <NavLink to={`/LatestFlim/`+id[0]}>Latest Films</NavLink>
                    <NavLink to={`/Adventure/` +id[1]}>Adventure</NavLink>
                    <NavLink to={`/Thriller/`  +id[2]}>Thriller</NavLink>
                </nav>
                </HashRouter>
            </header>
            
        </div>
    )
}

export default Header
