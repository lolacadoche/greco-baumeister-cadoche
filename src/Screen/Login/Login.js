import React from "react";
import Cookies from "universal-cookie";

let Cookies = new Cookies();


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    }
  }
  
chqueoDeEmail(e){
  this.setState({
    email: e.value
    // esta mal o me falta algo pero no se que
  })
}

chequeoDelSubmit(e){
  e.preventDefault();
  
  let usuario = JSON.parse(localStorage.getItems("users"));
  let usuarioencontrado = usuarios 
  // queiro que usuario encontrado encuentre el email ingresado en el storage de usuarios


if(
  usuario
)
}





  render() {
    return (
      <main>
        <h1>Iniciar Sesión</h1>
        <section>
          <form faltaaaaaa>
            <label>Email:</label>
            <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={()=>()} />




            <label>Contraseña:</label>
            <input type="password"
              name="password"
              value={this.state.password}
              onChange={ ()=>()}/>

              <button type="submit">Ingresar</button>

              {/* NO SE SI NECESITO UN BOTON QUE TE LLEVE A REGISTER SI NO TENER CUENTA */}

          </form>
        </section>
      </main>
    )
  }
}

export default Login;