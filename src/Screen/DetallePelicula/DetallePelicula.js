import React, { Component } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null,
            favorito: false
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"))
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`;


        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    info: data
                });
            })
            .catch(error => console.log(error));

        if (peliculaslocalStorage) {
            let peliculaEntrada = peliculaslocalStorage.includes(id)

            if (peliculaEntrada) {
                this.setState({
                    favorito: true
                })
            }
        }
    }

    favoritos() {
        let id = this.props.match.params.id
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"))
        let arrayasubir = []
        if (peliculaslocalStorage === null) {
            arrayasubir.push(id)
            localStorage.setItem("peliculasfavoritas", JSON.stringify(arrayasubir))
            this.setState({
                favorito: true
            })
        }
        else {
            peliculaslocalStorage.push(id)
            localStorage.setItem("peliculasfavoritas", JSON.stringify(peliculaslocalStorage))
            this.setState({
                favorito: true
            })
        }
    }

    quitarDeFavoritos() {
        let peliculaslocalStorage = localStorage.getItem("peliculasfavoritas")
        if (peliculaslocalStorage !== null) {
            let favoritasParseadas = JSON.parse(peliculaslocalStorage)
            console.log(favoritasParseadas)
            console.log(this.state.info.id)
            let favoritosFiltrados = favoritasParseadas.filter(id => {
                return id != this.state.info.id
            })
            console.log(favoritosFiltrados)
            let string = JSON.stringify(favoritosFiltrados)
            localStorage.setItem("peliculasfavoritas", string)
            this.setState({
                favorito: false
            })
        }
    }

    render() {
        console.log(this.props);
        let sesion= sessionStorage.getItem("usuarioEnSesion");
        let userLogueado =false;

        if(sesion !== null){
            let sesionParseada = JSON.parse(sesion);
            if(sesionParseada.sesionActiva === true){
                userLogueado = true; 
            }
        }
        let botonFav= null;
        if(userLogueado){
            if(this.state.favorito){
                 botonFav = (
                    <button onClick={()=>this.quitarDeFavoritos()} className='btn btn-primary'>Sacar de favoritos</button>)
               } else{
               botonFav=( <button onClick={()=>this.favoritos()} className="btn alert-info">♥️</button> )
               }  
            }else{
                botonFav = null
            }
        let usuario = cookies.get('user-auth-cookie')
        return (
            this.state.info === null ? <h2>Cargando...</h2> :
                <section className="row">
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.info.poster_path}`} alt="foto" className="col-md-6" />
                    <section className="col-md-6 info">
                        <h3>{this.state.info.title}</h3>
                        <p className="description">{this.state.info.overview}</p>
                        <p className="mt-0 mb-0"> <b>Fecha de estreno:</b> {this.state.info.release_date}</p>
                        <p className="mt-0 mb-0 length"><b>Duración:</b> {this.state.info.runtime}</p>
                        <p className="mt-0"><b>Puntuación:</b> {this.state.info.vote_average}</p>
                        <p className="mt-0 mb-0"><b>Género: </b>{this.state.info.genres[0].name}</p>
                        {botonFav}
                    </section>
                </section>

        )
    }
}
export default DetallePelicula;

