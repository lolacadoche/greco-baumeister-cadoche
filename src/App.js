
let menu = [{ nombre: "Home", ruta: "/" },
  { nombre: "Peliculas", ruta: "" },
  { nombre: "Series", ruta: "" },
  { nombre: "Favoritas", ruta: "" },
  { nombre: "Registro", ruta: "" },
  { nombre: "Login", ruta: "" }]
  ``
function App() {
  return (
    <div className="App">
    <nav>
      <ul className="main-nav">
        {menu.map((palabra, idx) => (<Header key={idx} items={palabra.nombre} to={palabra.ruta}/>))} </ul>
    </nav>

    </div>
  );
}

export default App;
