import React from "react";
import { Link } from 'react-router-dom';


function Header (props) {
    return (
        <nav>
            <ul>
                <li> <Link to="/">Homw</Link> </li>
                <li> <Link to="">Peliculas</Link> </li>
                <li> <Link to="">Series</Link> </li>
                <li> <Link to="">Favoritas</Link> </li>
            </ul>
            <ul>
                <li> <Link to="">Register</Link> </li>
                <li> <Link to="">Login</Link> </li>
            </ul>
        </nav>
        
        
        
    )
    }

export default Header;
