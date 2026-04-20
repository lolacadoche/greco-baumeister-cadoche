import React, { Component } from "react";
import { Link, withRouter} from 'react-router-dom';
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            linkFav: null,
            linkLogin: null,
            linkRegister: null, 
            linkLogout: null
        }
    } 
      Logout(){
            cookies.remove("user-auth-cookie");
            this.setState({
                linkRegister: <li className="nav-link"> <Link to="/Register">Register</Link> </li>,
                linkLogin: <li className="nav-link"> <Link to="/Login">Login</Link> </li>,
                linkFav: null,
                linkLogout: null
            })
            this.props.history.push("/login")
        }

    componentDidMount(){
        let sesion= cookies.get("user-auth-cookies");
        let userLogueado = false;

        if(sesion !== null){
            userLogueado=true; 
        }

        if(userLogueado){
            this.setState({
                linkFav: <li className="nav-link"> <Link to="/Favoritos">Favoritas</Link> </li>,
                linkLogout: <li className="nav-link"> <button onClick={() => this.Logout()} className="nav-link">Logout</button> </li>,
                linkLogin: null,
                linkRegister: null
            })   
        } else{
            this.setState({
                linkRegister: <li className="nav-link"> <Link to="/Register">Register</Link> </li>,
                linkLogin: <li className="nav-link"> <Link to="/Login">Login</Link> </li>,
                linkFav: null,
                linkLogout: null
            })
            console.log(sessionStorage)
        }
        
}
    render(){
            return (
        <nav>
            <ul className="nav nav-tabs my-4">
                <li className="nav-link"> <Link to="/">Home</Link> </li>
                <li className="nav-link"> <Link to="/Peliculas">Peliculas</Link> </li>
                <li className="nav-link"> <Link to="/Series">Series</Link> </li>
                {this.state.linkFav}
                {this.state.linkRegister}
                {this.state.linkLogin}
                {this.state.linkLogout}
            </ul>
        </nav>         
    )
        }

}
export default withRouter(Header);