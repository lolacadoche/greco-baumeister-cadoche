import React, { Component } from "react";
import Buscador from "../../Components/Buscador/Buscador";
import CargarMas from "../../Components/CargarMas/CargarMas";

function Series() {
  return (
    <React.Fragment>
      <h1>Todas las Series</h1>
      <Buscador />
      <CargarMas tipo="TV" />

      <section>

      </section>

    </React.Fragment>
  )
}

export default Series;