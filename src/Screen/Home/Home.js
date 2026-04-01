import React from "react";
import Header from "../Components/Header/Header";
import Navegador from "../Components/Navegador/Navegador";
import Buscador from "../Components/Buscador/Buscador";
import Movies from "../Components/Movies/Movies";
import Series from "../Components/Series/Series";
import Footer from "../Components/Footer/Footer";

function Home() {
    return (
        <div className="container">

            <Header />


            <Buscador />

            <h2 className="alert alert-primary">Popular movies this week</h2>
            <Movies />

            <h2 className="alert alert-primary">Movies now playing</h2>
            <Movies />

            <h2 className="alert alert-warning">Popular TV shows this week</h2>
            <Series />

            <h2 className="alert alert-warning">TV shows airing today</h2>
            <Series />

            <Footer />

        </div>
    );
}

export default Home;