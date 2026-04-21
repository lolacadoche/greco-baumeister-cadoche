import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { Link } from 'react-router-dom';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    };

    componentDidMount() {
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca";

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results.slice(0, 4)
                });
            })
            .catch(error => console.log(error));

    };


    render() {
        return (
            <div className="row">
                <Link to="/peliculas">
                    <button className="btn btn-primary">Ver todas</button>
                </Link>
                <section className="row cards all-movies" id="movies">
                    {this.state.peliculas ? (
                        this.state.peliculas.map((peliculas) => (
                            <Movie key={peliculas.id} titulo={peliculas.title} name={peliculas.title} overview={peliculas.overview} image={`https://image.tmdb.org/t/p/w342${peliculas.poster_path}`} id={peliculas.id} />
                        ))
                    ) : (<h3>Cargando...</h3>)}
                </section>
            </div>
        );
    };
};

export default Movies;