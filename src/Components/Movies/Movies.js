import React, { Component } from "react";

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
            url = "https://www.themoviedb.org/movie";
        } else if (this.props.link === "nowPlaying") {
            url = "https://www.themoviedb.org/movie/now-playing";
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

            </div>
        )
    }
}

export default Movies;