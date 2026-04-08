import React, {Component} from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props){
        super(props)
            }

    render() {
        return (
            <article className='movie-card'>
                <img src={this.props.image} alt={this.props.name} />

                <h2>{this.props.name}</h2>

                <p>{this.props.overview}</p>

                <Link to={`/movie/${this.props.id}`}>
                    <button className='more'>Ver más</button>
                </Link>
            </article>
        )
    }
}

export default Movie;


