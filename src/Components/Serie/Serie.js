import React, { Component } from "react";
import { Link } from "react-router-dom";

class Serie extends Component {
    constructor(props) {
        super(props)
        this.state={
            boton: "Ver más",
            claseOcultar: "hide",
            favorito: false
        }
            }

     cambio(){
        if (this.state.boton === "Ver más"){
            this.setState({
                boton: "Ver menos",
                claseOcultar: "show"
            })
        } else {
            this.setState({
                boton: "Ver más",
                claseOcultar: "hide"
            })
        }
    }
    componentDidMount() {
        let serieslocalStorage = JSON.parse(localStorage.getItem("seriesfavoritas"))
        if (serieslocalStorage) {
            let serieEntrada = serieslocalStorage.includes(this.props.id)

            if (serieEntrada) {
                this.setState({
                    favorito: true
                })
            }
        }
    }
    favoritos() {
        let id = this.props.id
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
            let favoritosFiltrados = favoritasParseadas.filter(id => {
                return id != this.props.id
            })
            let string = JSON.stringify(favoritosFiltrados)
            localStorage.setItem("seriesfavoritas", string)
            this.setState({
                favorito: false
            })
        }
    }

    
    render() {
        return (
        <article className='single-card-tv'>
            <img src={this.props.image} alt={this.props.name} className="card-img-top"/>
        
            <h5 className="card-title">{this.props.name}</h5>
            <button onClick={()=> this.cambio()} className='btn btn-primary'>{this.state.boton} </button>
                    <section className={`extra ${this.state.claseOcultar}`}>
                        <p className="card-text">{this.props.overview}</p>
                    </section>
        
            <Link to={`/DetalleSerie/id/${this.props.id}`}>
                <button className='btn btn-primary'>Ver detalle</button>
            </Link>
            {this.state.favorito ? 
                <button onClick={()=>this.quitarDeFavoritos()} className='btn btn-primary'>Sacar de favoritos</button>
                :  <button onClick={()=>this.favoritos()} className='btn btn-primary'>Agregar a favoritos</button>
                }   
        </article>
    )
            
    }
}

export default Serie;