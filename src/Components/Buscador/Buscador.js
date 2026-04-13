import React, { Component } from "react";
import {withRouter} from 'react-router-dom'

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${ this.state.busqueda}`);
  }

  controlarCambios(event) {
    this.setState({
      busqueda: event.target.value
    });
  }



  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)} className="search-form">

        <input name="searchData"
          type="text"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={(event) => this.controlarCambios(event)}
        />

        <button type="submit" className="btn.btn-success.btn-sm">Buscar</button>

      </form>
    );
  }
}

export default withRouter( Buscador)