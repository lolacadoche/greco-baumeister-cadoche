import React from "react";
import { Link } from 'react-router-dom';


function Header (props) {
    return (
        <nav className="nav nav-tabs my-4">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/Peliculas">Peliculas</Link> </li>
                <li> <Link to="/Series">Series</Link> </li>
                <li> <Link to="/Favoritos">Favoritas</Link> </li>
            </ul>
            <ul>
                <li> <Link to="">Register</Link> </li>
                <li> <Link to="">Login</Link> </li>
            </ul>
        </nav>
        
        
        
    )
    }

export default Header;
