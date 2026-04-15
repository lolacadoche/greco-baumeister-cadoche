import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";


class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        }
    }

    preventSubmitEmail = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    preventSubmitPassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }


    submit = (e) => {
        e.preventDefault();
        let usersEnStorage = localStorage.getItem("users");

        if (usersEnStorage === null) {
            this.setState({
                error: "Lo ingresado es invalido"
            })

        }

        let usersConvertidos = JSON.parse(usersEnStorage);
        let usersFilatrado = usersConvertidos.filter(
            (user) => user.email === this.state.email)


        if (usersFilatrado.length === 0) {
            this.setState({
                error: "El usuario ingresado no existe"
            })
        }

        if (usersFilatrado[0].password !== this.state.password) {
            this.setState({
                error: "Las credenciales ingresadas son invalidas"
            })
        }

        sessionStorage.setItem(
            "usuarioEnSesion",
            JSON.stringify({ sesionActiva: true })
        )

        this.props.history.push("/")
    }

  

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.preventSubmitEmail} />
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.preventSubmitPassword} />
                        </div>
                        <button type="button" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <p class="mt-3 text-center">¿No tenés cuenta?</p><Link to="/Register">Register</Link>

                </div>
            </div>

        )
    }
}

export default withRouter(FormLogin)
