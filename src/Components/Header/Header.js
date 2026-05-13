import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import Cookies from "universal-cookie";
import { useState, useEffect } from "react";


const cookies = new Cookies();

function Header(props) {
    const [linkFav, setlinkFav] = useState(null);
    const [linkLogin, setlinkLogin] = useState(null);
    const [linkRegister, setlinkRegister] = useState(null);
    const [linkLogout, setlinkLogout] = useState(null);

  
    function Logout(event) {
        cookies.remove("user-auth-cookie");
        setlinkFav(null);
        setlinkLogout(null);
        setlinkLogin(<li className="nav-link"> <Link to="/Login">Login</Link> </li>);
        setlinkRegister(<li className="nav-link"> <Link to="/Register">Register</Link> </li>);
         this.props.history.push("/login");
    };



    useEffect( () => {
        let sesion = cookies.get("user-auth-cookie");
        let userLogueado = false;

        if (sesion !== undefined) {
            userLogueado = true;
        };

        if (userLogueado) {
                setlinkFav(<li className="nav-link"> <Link to="/Favoritos">Favoritas</Link> </li>);
                setlinkLogout(<li className="logout-btn"> <button onClick={() => Logout()} className="nav-link">Logout</button> </li>);
                setlinkLogin(null);
                setlinkRegister(null)
            }else {
                setlinkRegister(<li className="nav-link"> <Link to="/Register">Register</Link> </li>);
                setlinkLogin(<li className="nav-link"> <Link to="/Login">Login</Link> </li>);
                setlinkFav(null);
                setlinkLogout(null)
            };

        }, []  ) 
         
    
  
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
        );
    }

export default withRouter(Header);