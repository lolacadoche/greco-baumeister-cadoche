import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

let cookies = new Cookies();

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
            errorUser: ""
        };
    };

    preventSubmitEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    preventSubmitPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };


    submit = (event) => {
        event.preventDefault();

        let usersEnStorage = localStorage.getItem("users");

        if (usersEnStorage === null) {
            this.setState({
                errorUser: "No hay usuarios registrados."
            });
            return;
        };

        if (!this.state.email.includes("@")) {
            this.setState({
                errorEmail: "E-mail mal formateado."
            })
            return;
        };

        let usersConvertidos = JSON.parse(usersEnStorage);
        let usersFilatrado = usersConvertidos.filter(
            (user) => user.email === this.state.email);


        if (usersFilatrado.length === 0) {
            this.setState({
                errorUser: "El usuario ingresado no existe"
            })
            return;
        };

        if (usersFilatrado[0].password !== this.state.password) {
            this.setState({
                errorPassword: "Las credenciales ingresadas son invalidas"
            });
            return;
        };

        if (usersFilatrado.length > 0 && usersFilatrado[0].password === this.state.password) {
            cookies.set("user-auth-cookie", usersFilatrado[0].email);

            sessionStorage.setItem(
                "usuarioEnSesion",
                JSON.stringify({ sesionActiva: true }));

            this.props.history.push("/");
        };

    };



    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(event) => this.submit(event)}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email"
                                name="email"
                                value={this.state.email}
                                onChange={(event) => this.preventSubmitEmail(event)} className="form-control" />
                            <p>{this.state.errorEmail}</p>
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                                name="password"
                                value={this.state.password}
                                onChange={(event) => this.preventSubmitPassword(event)} className="form-control" />
                            <p>{this.state.errorPassword}</p>
                            <p>{this.state.errorUser}</p>

                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/Register">Register</Link></p>
                </div>
            </div>

        );
    };
};

export default withRouter(FormLogin);
