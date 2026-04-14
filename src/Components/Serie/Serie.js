import React, {Component} from "react";
import { Link } from "react-router-dom";

class Serie extends Component {
    constructor(props){
        super(props)
        this.state={
            boton: "Ver más",
            claseOcultar: "hide"
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
    render(){
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
        </article>
    )
    }

}
export default Serie;