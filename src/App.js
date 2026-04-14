import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DetallePelicula from './Screen/DetallePelicula/DetallePelicula';
import DetalleSerie from './Screen/DetalleSerie/DetalleSerie';
import Favoritos from './Screen/Favoritos/Favoritos';
import Home from './Screen/Home/Home';
import Login from './Screen/Login/Login';
import NotFound from './Screen/NotFound/NotFound';
import Peliculas from './Screen/Peliculas/Peliculas';
import Series from './Screen/Series/Series';
import Register from './Screen/Register/Register';


import { Route, Switch } from "react-router-dom";


// let menu = [{ nombre: "Home", ruta: "/" },
// { nombre: "Peliculas", ruta: "" },
// { nombre: "Series", ruta: "" },
// { nombre: "Favoritas", ruta: "" },
// { nombre: "Registro", ruta: "" },
// { nombre: "Login", ruta: "" }]



function App() {
  return (

    <React.Fragment>
      <div className="container">
      <h1>UdeSA Movies</h1>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/DetallePelicula/id/:id" component={DetallePelicula} />
        <Route path="/DetalleSerie/id/:id" component={DetalleSerie} />
        <Route path="/Favoritos" component={Favoritos} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
        <Route path="/Peliculas" component={Peliculas} />
        <Route path="/Series" component={Series} />
        <Route path="*" component={NotFound} />
      </Switch>

      <Footer />
      </div>
    </React.Fragment>


    // <div className="App">
    // <nav>
    //   <ul className="main-nav">
    //     {menu.map((palabra, idx) => (<Header key={idx} items={palabra.nombre} to={palabra.ruta}/>))} </ul>
    // </nav>

    // </div>
  );
}

export default App;
