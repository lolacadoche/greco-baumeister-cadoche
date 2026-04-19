import React, { Component } from "react";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class DetalleSerie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null,
            favorito: false
        };
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let serieslocalStorage = JSON.parse(localStorage.getItem("seriesfavoritas"))
        let url = `https://api.themoviedb.org/3/tv/${id}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`;


        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    info: data
                });
            })
            .catch(error => console.log(error));

        if (serieslocalStorage) {
            let serieEntrada = serieslocalStorage.includes(id)

            if (serieEntrada) {
                this.setState({
                    favorito: true
                })
            }
        }
    }

    favoritos() {
        let id = this.props.match.params.id
        let serieslocalStorage = JSON.parse(localStorage.getItem("seriesfavoritas"))
        let arrayasubir = []
        if (serieslocalStorage === null) {
            arrayasubir.push(id)
            localStorage.setItem("seriesfavoritas", JSON.stringify(arrayasubir))
            this.setState({
                favorito: true
            })
        }
        else {
            serieslocalStorage.push(id)
            localStorage.setItem("seriesfavoritas", JSON.stringify(serieslocalStorage))
            this.setState({
                favorito: true
            })
        }
    }

    quitarDeFavoritos() {
        let serieslocalStorage = localStorage.getItem("seriesfavoritas")
        if (serieslocalStorage !== null) {
            let favoritasParseadas = JSON.parse(serieslocalStorage)
            let favoritosFiltrados = favoritasParseadas.filter(id => id != this.props.id)
            let string = JSON.stringify(favoritosFiltrados)
            localStorage.setItem("seriesfavoritas", string)
            this.setState({
                favorito: false
            })
        }
    }

    render(){
        return(
            this.state.info === null ? <h2>Cargando...</h2> :
                <section className="row">
                    <img src={`https://image.tmdb.org/t/p/w342${this.state.info.poster_path}`} alt="foto" className="col-md-6" />
                    <section className="col-md-6 info">
                        <h3>{this.state.info.name}</h3>
                        <p className="description">{this.state.info.overview}</p>
                        <p className="mt-0 mb-0 length"><b>Fecha de estreno:</b> {this.state.info.first_air_date}</p>
                        <p className="mt-0 mb-0 length"><b>Número de capitulo:</b> {this.state.info.number_of_episodes}</p>
                        <p className="mt-0 mb-0 length"><b>Calificación:</b> {this.state.info.vote_average}</p>
                        <p className="mt-0 mb-0 length"><b>Género:</b> {this.state.info.genres[0].name}</p>
                        {
                            !this.state.favorito ? <button onClick={() => this.favoritos()} className='btn btn-primary'>Agregar a favoritos</button>
                                : <button onClick={() => this.quitarDeFavoritos()} className='btn btn-primary'>Quitar de favoritos</button>
                        }
                    </section>
                </section>
        )
    }
}
export default DetalleSerie;

