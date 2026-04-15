import React, { Component } from "react";
import Movie from "../../Components/Movie/Movie";

class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            copiapeliculas: [],
            nextPage: 1,
            filtro: ""
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ filtro: event.target.value }, () => this.filtrarPeliculas());
    }

    filtrarPeliculas() {
        this.setState({
            peliculas: this.state.copiapeliculas.filter(pelicula =>
                pelicula.title.toLowerCase().includes(this.state.filtro.toLowerCase())
            )
        })
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=cd21534ccf3ef8b078f7ac273cdf32ca')
            .then(response => response.json())
            .then(data => this.setState({
                peliculas: data.results,
                copiapeliculas: data.results,
                nextPage: 2
            }))
            .catch(error => console.log(error))
    }

    cargarMas = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&page=${this.state.nextPage}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                copiapeliculas: this.state.peliculas.concat(data.results),
                nextPage: this.state.nextPage + 1
            }))
            .catch(err => console.log(err))
    }

    borrarPelicula = (id) => {
        let filtradas = this.state.peliculas.filter(
            pelicula => pelicula.id !== id)
        this.setState({
            peliculas: filtradas
        })
    }

    render() {
        return (
            <React.Fragment>

                <form className="filter-form px-0 mb-3" onSubmit={(event) => this.evitarSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Buscar dentro de la lista..."
                        onChange={(event) => this.controlarCambios(event)}
                        value={this.state.filtro}
                    />
                </form>

                <section className="row cards all-movies">
                    {this.state.peliculas.length > 0 ? (
                        this.state.peliculas.map((pelicula) => (
                            <Movie
                                key={pelicula.id}
                                id={pelicula.id}
                                name={pelicula.title}
                                image={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}

                            />
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </section>

                {
                    this.state.nextPage && (
                        <button onClick={this.cargarMas}>
                            Mas Peliculas
                        </button>
                    )
                }

            </React.Fragment>
        )
    }
}

export default Peliculas;