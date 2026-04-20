import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorito: false,
            boton: "Ver más",
            claseOcultar: "hide"
        };
    };
    componentDidMount() {
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"));
        if (peliculaslocalStorage) {
            let peliculaEntrada = peliculaslocalStorage.includes(this.props.id);

            if (peliculaEntrada) {
                this.setState({
                    favorito: true
                });
            };
        };
    };
    cambio() {
        if (this.state.boton === "Ver más") {
            this.setState({
                boton: "Ver menos",
                claseOcultar: "show"
            })
        } else {
            this.setState({
                boton: "Ver más",
                claseOcultar: "hide"
            });
        };
    };

    favoritos() {
        let id = this.props.id
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"));
        let arrayasubir = [];
        if (peliculaslocalStorage === null) {
            arrayasubir.push(id);
            localStorage.setItem("peliculasfavoritas", JSON.stringify(arrayasubir));
            this.setState({
                favorito: true
            });
        }
        else {
            peliculaslocalStorage.push(id)
            localStorage.setItem("peliculasfavoritas", JSON.stringify(peliculaslocalStorage))
            this.setState({
                favorito: true
            });
        };
    };

    quitarDeFavoritos() {
        let peliculaslocalStorage = localStorage.getItem("peliculasfavoritas")
        if (peliculaslocalStorage !== null) {
            let favoritasParseadas = JSON.parse(peliculaslocalStorage)
            let favoritosFiltrados = favoritasParseadas.filter(id => {
                return id != this.props.id
            })
            console.log(favoritosFiltrados)
            let string = JSON.stringify(favoritosFiltrados)
            localStorage.setItem("peliculasfavoritas", string)
            this.setState({
                favorito: false
            });
        };
    };

    render() {
        console.log(this.props);
        let sesion = sessionStorage.getItem("usuarioEnSesion");
        let userLogueado = false;

        if (sesion !== null) {
            let sesionParseada = JSON.parse(sesion);
            if (sesionParseada.sesionActiva === true) {
                userLogueado = true;
            };
        };
        let botonFav = null;
        if (userLogueado) {
            if (this.state.favorito) {
                botonFav = (
                    <button onClick={() => this.quitarDeFavoritos()} className='btn btn-primary'>Sacar de favoritos</button>)
            } else {
                botonFav = (<button onClick={() => this.favoritos()} className="btn alert-info">♥️</button>)
            }
        } else {
            botonFav = null
        };

        return (
            <article className='single-card-movie'>
                <img src={this.props.image} alt={this.props.name} className="card-img-top" />

                <div className="cardBody">
                    <h5 className="card-title">{this.props.name}</h5>
                    <section className={`extra ${this.state.claseOcultar}`}>
                        <p className="card-text">{this.props.overview}</p>
                    </section>
                    <div className="card-buttons">
                        <button onClick={() => this.cambio()} className='btn btn-primary'>{this.state.boton} </button>
                        <Link to={`/DetallePelicula/id/${this.props.id}`}>
                            <button className='btn btn-primary' >Ver detalle</button>
                        </Link>
                    </div>
                    {botonFav}
                </div>
            </article>
        );
    };
};

export default Movie;


