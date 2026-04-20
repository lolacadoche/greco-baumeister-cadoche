import React, { Component } from "react";
import { withRouter } from 'react-router-dom'

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: ""
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.busqueda}/${this.state.tipo}`);
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }

 valor = (e) => {
    this.setState({
      tipo: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)} className="search-form">
        <label>
          <input
            type="radio"
            name="tipo"
            value="peliculas"
            onChange={this.valor}
          />
          Películas
        </label>

        <label>
          <input
            type="radio"
            name="tipo"
            value="series"
            onChange={this.valor}
          />
          Series
        </label>




        <input name="searchData"
          type="text"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={(event) => this.controlarCambios(event)}
        />

        <button type="submit" className="btn btn-success btn-sm">Buscar</button>

      </form>
    );
  }
}

export default withRouter(Buscador)