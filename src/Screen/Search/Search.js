import React from "react";
import Movie from "../../Components/Movie/Movie";
import Serie from "../../Components/Serie/Serie";
import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        };
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca&query `)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    resultados: data.results
                });
            })

            .catch((error) => console.log("ERROR"));
    }

    render() {
       
          
    let contenido = "";

    if (this.state.resultados.length > 0) {
        contenido = (
            if(this)
            <section className="card-Container">
                {this.state.resultados.map((item, index) => (
                    <Movie key={index} data={item} />
                ))}
            </section>
        );
    
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



}}

export default Search