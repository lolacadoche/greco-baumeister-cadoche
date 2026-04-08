import React, {Component} from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props){
        super(props)
            }

    render() {
        return (
            <article className='single-card-movie'>
                <img src={this.props.image} alt={this.props.name} className="card-img-top"/>

                <div className="cardBody"> 
                    <h5 className="card-title">{this.props.name}</h5>

                    <p className="card-text">{this.props.overview}</p>

                    <Link to={`/Detalle/${this.props.id}`}>
                        <button className='btn btn-primary'>Ver más</button>
                    </Link>
                </div>
            </article>
        )
    }
}

export default Movie;


