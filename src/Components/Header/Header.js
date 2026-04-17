import React from "react";
import { Link } from 'react-router-dom';


function Header (props) {
    let sesion= sessionStorage.getItem("usuarioEnSesion");
    let userLogueado = false;

    if(sesion !== null){
        userLogueado=true; 
    }
    let linkFav = null; 
    let linkLogin = null; 
    let linkRegister = null; 
    let linkLogout = null; 

    if(userLogueado){
        linkFav = <li className="nav-link"> <Link to="/Favoritos">Favoritas</Link> </li>
        linkLogout = <li className="nav-item"> <Link to="/Home">Logout</Link> </li>
    } else{
        linkRegister = <li className="nav-link"> <Link to="/Register">Register</Link> </li>
        linkLogin =<li className="nav-item"> <Link to="/Login">Login</Link> </li>
    }
    return (
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-link"> <Link to="/">Home</Link> </li>
                <li className="nav-link"> <Link to="/Peliculas">Peliculas</Link> </li>
                <li className="nav-link"> <Link to="/Series">Series</Link> </li>
                {linkFav}
                {linkRegister}
                {linkLogin}
                {linkLogout}
            </ul>
        </nav>
        
        
        
    )
    }

export default Header;
