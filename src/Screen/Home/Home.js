import React from "react";
import Buscador from "../../Components/Buscador/Buscador";
import Movies from "../../Components/Movies/Movies";
import Series from "../../Components/Series/Series";




function Home() {

    // ALGO: ARRAYS CAPAS

    return (
        <React.Fragment>
            <div className="container">

                <Buscador />

                <h2 className="alert alert-primary">Popular movies this week</h2>
                <Movies link="popular" />

                <h2 className="alert alert-primary">Popular series this week</h2>
                <Series link="nowPlaying" />



            </div>
        </React.Fragment>
    );
}

export default Home;