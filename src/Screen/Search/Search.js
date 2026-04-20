import React from "react";
import Movie from "../../Components/Movie/Movie";
import Serie from "../../Components/Serie/Serie";
import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            tipo: this.props.match.params.tipo,
            contenido: ""
        };
    }

    componentDidMount() {
        let busqueda = this.props.match.params.busqueda;
        let tipo = this.props.match.params.tipo;

        console.log(tipo);
        console.log(busqueda);
        
        

        let url = "";
        if (tipo === "peliculas") {
            url = `https://api.themoviedb.org/3/search/movie?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&query=${busqueda}`
        }
        else if (tipo === "series") {
            url = `https://api.themoviedb.org/3/search/tv?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&query=${busqueda}`
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    resultados: data.results
                });
            })
            .catch((error) => console.log("ERROR"));
    }



    render() {
        console.log(this.state.resultados);
        
        let contenido = "";
        if (this.state.resultados.length > 0) {

            if (this.state.tipo === "series") {
                contenido = (
                    <section className="card-container">
                        {this.state.resultados.map((series) => (<Serie key={series.id} id={series.id} titulo={series.name} name={series.name} overview={series.overview} image={`https://image.tmdb.org/t/p/w342${series.poster_path}`} />
                        ))}
                    </section>
                )
            }

            else if (this.state.tipo === "peliculas") {
                contenido = (
                    <section className="card-Container">
                        {this.state.resultados.map((peliculas) => (<Movie key={peliculas.id} titulo={peliculas.title} name={peliculas.title} overview={peliculas.overview} image={`https://image.tmdb.org/t/p/w342${peliculas.poster_path}`} id={peliculas.id} />))}
                    </section>
                )
            }

        } else {
            contenido = (
                <p>Lo siento. No hay resultados para tu busqueda.</p>
            );
        }


        return (
            <main>
                <h1>Resultados de busqueda</h1>
                {contenido}
            </main>
        )



    }
}

export default Search