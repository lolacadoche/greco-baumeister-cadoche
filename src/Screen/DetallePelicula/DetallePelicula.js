import React, { Component } from "react";


class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state={
            info: {},
            favorito: false
        };
    }
    componentDidMount(){
      let id = this.props.match.params.id
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=cd21534ccf3ef8b078f7ac273cdf32ca`;


        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    info: data
                });
            })
            .catch(error => console.log(error));
            
    }
    favoritos(){
        let id = this.props.match.params.id
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"))
        let arrayasubir = []
        if (peliculaslocalStorage === null){
            arrayasubir.push(id)
            localStorage.setItem("peliculasfavoritas", JSON.stringify(arrayasubir))
        }
        else{

        }
        
    }

    render(){
        return(
          
            <div className="row">
                <h2>{this.state.info.title}</h2>
                <img src={this.state.info.poster_path} alt="foto"/>
                <p>{this.state.info.vote_average}</p>
                <p>{this.state.info.release_date}</p>
                <p>{this.state.info.runtime}</p>
                <p>{this.state.info.overview}</p>
                <p>{this.state.info.genres[0].name}</p> 
                <button onClick = {()=>this.favoritos()}>{this.state.favorito?"Quitar de favoritos": "Agregar a favoritos"}</button>
            </div>
        )
    }
}

export default DetallePelicula;

