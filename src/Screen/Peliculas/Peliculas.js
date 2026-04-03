import React, { Component } from "react";
import Buscador from "../../Components/Buscador/Buscador";
import CargarMas from "../../Components/CargarMas/CargarMas";

function Peliculas() {
  return (
    <React.Fragment>
      <h1>Todas las Pleiculas</h1>
      <Buscador />
      <CargarMas tipo="Movie"/>


    </React.Fragment>
  )
}

export default Peliculas;