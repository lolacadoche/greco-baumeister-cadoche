import React from "react";
import { Link } from 'react-router-dom';


function Header (props) {
    return (
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-link"> <Link to="/">Home</Link> </li>
                <li className="nav-link"> <Link to="/Peliculas">Peliculas</Link> </li>
                <li className="nav-link"> <Link to="/Series">Series</Link> </li>

                <li className="nav-link"> <Link to="/Favoritos">Favoritas</Link> </li>
                <li className="nav-link"> <Link to="/Register">Register</Link> </li>
                <li className="nav-item"> <Link to="/Login">Login</Link> </li>
            </ul>

        
        </nav>
        
        
        
    )
    }

export default Header;
