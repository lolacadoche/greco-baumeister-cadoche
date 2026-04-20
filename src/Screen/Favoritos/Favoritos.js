import React, { Component } from "react";
import Buscador from "../../Components/Buscador/Buscador";
import Movie from "../../Components/Movie/Movie";
import Serie from "../../Components/Serie/Serie";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favMovies: [],
      favSeries: []
    };
  }

  componentDidMount() {
    let localPeliculas = localStorage.getItem("peliculasfavoritas")
    if (localPeliculas !== null) {
      let idPeliculas = JSON.parse(localPeliculas)
      let peliculas = []
      idPeliculas.map(unId => {
        fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`)
          .then(response => response.json())
          .then(data => {
            peliculas.push(data)
            this.setState({
              favMovies: peliculas
            });
          })
          .catch(error => console.log(error));
      })
    }

    let localSeries = localStorage.getItem("seriesfavoritas")
    if (localSeries !== null) {
      let idSeries = JSON.parse(localSeries)
      let series = []
      idSeries.map(unId => {
        console.log(unId)
        fetch(`https://api.themoviedb.org/3/tv/${unId}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`)
          .then(response => response.json())
          .then(data => {
            series.push(data)
            console.log(data)
            this.setState({
              favSeries: series
            });
          })
          .catch(error => console.log(error));
      })
    }
  }
  
  render() {
    let usuario = cookies.get('user-auth-cookie')
    return (
      <div className="container">
        <React.Fragment>
        <Buscador />

        <h2 className="alert alert-primary">Favourite movies</h2>
        <section className="row cards" id="movies">
          {this.state.favMovies ? (
            this.state.favMovies.map((peliculas) => (
              <Movie key={peliculas.id} titulo={peliculas.title} name={peliculas.title} overview={peliculas.overview} image={`https://image.tmdb.org/t/p/w342${peliculas.poster_path}`} id={peliculas.id} />
            ))
          ) : (<h3>Cargando...</h3>)}
        </section>

        <h2 className="alert alert-primary">Favourite series</h2>
        <section className="row cards" id="tv-show">
          {this.state.favSeries ? (
            this.state.favSeries.map((series) => (
              <Serie key={series.id} name={series.name} overview={series.overview} image={`https://image.tmdb.org/t/p/w342${series.poster_path}`} id={series.id}/>
            ))
          ) : (<h3>Cargando...</h3>)}
        </section>
        </React.Fragment>
      </div>
    )
  }
}
export default Favoritos;