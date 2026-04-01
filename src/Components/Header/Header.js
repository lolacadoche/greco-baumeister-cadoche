import React from "react";
import { Link } from 'react-router-dom';

function Header (props) {
    return (
        <li> <Link to={props.to}>{props.items}</Link> </li>
    )
    }

export default Header;

<nav>
            <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="movies.html">Películas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="favorites.html">Favoritas</a>
                </li>
                <li class="nav-item ml-auto">
                    <a class="nav-link" href="register.html">Registro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.html">Login</a>
                </li>
            </ul>
        </nav>
