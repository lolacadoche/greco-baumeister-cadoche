import React, {Component} from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
    constructor(props){
        super(props)
            }

    render() {
        return (
            <article className='movie-card'>
                <img src={props.image} alt={props.title} />

                <h2>{props.title}</h2>

                <p>{props.overview}</p>

                <Link to={`/movie/${props.id}`}>
                    <button className='more'>Ver más</button>
                </Link>
            </article>
        )
    }
}

export default Movie;


