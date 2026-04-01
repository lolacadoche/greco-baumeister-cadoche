import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Detalle from './Screen/Detalle/Detalle';
import Favoritos from './Screen/Favoritos/Favoritos';
import Formularios from './Screen/Formulario/Formulario';
import Home from './Screen/Home/Home';


import { Route, Switch } from "react-router-dom";


let menu = [{ nombre: "Home", ruta: "/" },
  { nombre: "Peliculas", ruta: "" },
  { nombre: "Series", ruta: "" },
  { nombre: "Favoritas", ruta: "" },
  { nombre: "Registro", ruta: "" },
  { nombre: "Login", ruta: "" }]
  


function App() {
  return (

<React.Fragment>
<Header/>


<Switch>
  <Route path="/"/>
</Switch>


<Footer/>
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
