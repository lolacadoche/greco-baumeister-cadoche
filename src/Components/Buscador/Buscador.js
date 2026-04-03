import React, { Component } from "react";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: "movie"
    };
  }

  evitarSubmit(event) {
    event.preventDefault();

    this.props.history.push( 
      // NO SE QUE PONER ACA
    );
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

  cambiarTipo(event) {
    this.setState({
      tipo: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>

        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={(event) => this.controlarCambios(event)}
        />

        <select onChange={(event) => this.cambiarTipo(event)}>
          <option value="movie">Películas</option>
          <option value="tv">Series</option>
        </select>

        <button type="submit">Buscar</button>

      </form>
    );
  }
}

export default Buscador;