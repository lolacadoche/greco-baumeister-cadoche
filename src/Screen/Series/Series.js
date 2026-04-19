import React, { Component } from "react";
import Serie from "../../Components/Serie/Serie";

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series: [],
            copiaSeries: [],
            nextPage: 1,
            filtro: ""
        };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ filtro: event.target.value }, () => this.filtrarSeries());
    }

    filtrarSeries() {
        this.setState({
            series: this.state.copiaSeries.filter(serie =>
                serie.name.toLowerCase().includes(this.state.filtro.toLowerCase())
            )
        })
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=cd21534ccf3ef8b078f7ac273cdf32ca')
            .then(response => response.json())
            .then(data => this.setState({
                series: data.results,
                copiaSeries: data.results,
                nextPage: 2
            }))
            .catch(error => console.log(error))
    }

    cargarMas = () => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&page=${this.state.nextPage}`)
            .then(res => res.json())
            .then(data => this.setState({
                series: this.state.series.concat(data.results),
                copiaSeries: this.state.series.concat(data.results),
                nextPage: this.state.nextPage + 1
            }))
            .catch(err => console.log(err))
    }

    borrarSerie = (id) => {
        let filtradas = this.state.series.filter(
            serie => serie.id !== id)
        this.setState({
            series: filtradas
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

                <section className="row cards all-series">
                    {this.state.series.length > 0 ? (
                        this.state.series.map((serie) => (
                            <Serie
                                key={serie.id}
                                id={serie.id}
                                name={serie.name}
                                image={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}

                            />
                        ))
                    ) : (
                        <p>Cargando...</p>
                    )}
                </section>

                {
                    this.state.nextPage && (
                        <button onClick={this.cargarMas} className="btn btn-info">
                            Mas series.
                        </button>
                    )
                }

            </React.Fragment>
        )
    }
}

export default Series;