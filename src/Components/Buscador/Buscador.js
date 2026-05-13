import React from "react";
import { withRouter } from 'react-router-dom'
import { useState } from "react";

function Buscador(props){
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");
      
      

  function evitarSubmit(event) {
    event.preventDefault();
    props.history.push(`/search/${this.state.busqueda}/${this.state.tipo}`);
  }

  function controlarCambios(event) {
      setBusqueda(event.target.value)
  };

  tipo = (e) => {
      setTipo(e.target.value)
  };
    return (
      <form onSubmit={(event) => evitarSubmit(event)} className="search-form">
        <input name="searchData" type="text" placeholder="Buscar..." value={busqueda} onChange={(event) => controlarCambios(event)} />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
        <div className="tipos">
          <label>Películas <input type="radio" name="tipo" value="peliculas" onChange={tipo} /></label>

          <label> Series  <input type="radio" name="tipo" value="series" onChange={tipo} /></label>
        </div>
      </form>
    )
  }


  

export default withRouter(Buscador);