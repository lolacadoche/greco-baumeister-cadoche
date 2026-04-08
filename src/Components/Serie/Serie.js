import React, {Component} from "react";
import { Link } from "react-router-dom";

class Serie extends Component {
    constructor(props){
        super(props)
            }
    render(){
        return (
        <article className='single-card-tv'>
            <img src={this.props.image} alt={this.props.name} className="card-img-top"/>
        
            <h5 className="card-title">{this.props.name}</h5>
        
            <p className="card-text">{this.props.overview}</p>
        
            <Link to={`/Detalle/${this.props.id}`}>
                <button className='btn btn-primary'>Ver más</button>
            </Link>
        </article>
    )
    }

}
export default Serie;