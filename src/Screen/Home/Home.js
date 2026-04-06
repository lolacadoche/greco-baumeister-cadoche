import React from "react";
import Buscador from "../../Components/Buscador/Buscador";
import Movies from "../../Components/Movies/Movies";
import Series from "../../Components/Series/Series";




function Home() {

    // ALGO: ARRAYS CAPAS

    return (
        <React.Fragment>
            <div className="container">

                <h1>UdeSA Movies</h1>

                <Buscador />

                <h2 className="alert alert-primary">Popular movies this week</h2>
                <Movies link="popular" />

                <h2 className="alert alert-primary">Movies now playing</h2>
                <Movies link="nowPlaying" />

                <h2 className="alert alert-warning">Popular TV shows this week</h2>
                <Series link="popularShows" />

                <h2 className="alert alert-warning">TV shows airing today</h2>
                <Series link="airingShows" />


            </div>
        </React.Fragment>
    );
}

export default Home;