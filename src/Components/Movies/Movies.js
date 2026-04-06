import React, { Component } from "react";
import Movie from "../Movie/Movie";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    componentDidMount() {
        let url = "";

        if (this.props.link === "popular") {
            url = "https://api.themoviedb.org/3/movie/popular";
        } else if (this.props.link === "nowPlaying") {
            url = "https://api.themoviedb.org/3/movie/now_playing";
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    peliculas: data.results
                });
            })
            .catch(error => console.log(error));

    }

    render() {
        return (
            <div className="row">
                 <section className="">
                     {this.state.peliculas ? (
                        this.state.peliculas.map((peliculas, index) => (
                           <Movie key={index} titulo={peliculas.title} />
                        ))
                    ) : (<h3>Cargando...</h3>)}
                </section>
            </div>
        )
    }
}

export default Movies;