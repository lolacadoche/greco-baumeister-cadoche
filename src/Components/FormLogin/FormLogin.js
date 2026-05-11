import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "universal-cookie";

let cookies = new Cookies();

function FormLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorUser, setErrorUser] = useState("");

    preventSubmitEmail = (e) => {
        setEmail(e.target.value);
    };
    preventSubmitPassword = (e) => {
        setPassword(e.target.value);
    };


    submit = (event) => {
        event.preventDefault();

        let usersEnStorage = localStorage.getItem("users");

        if (usersEnStorage === null) {
            setErrorUser("No hay usuarios registrados.");
            return;
        };

        if (!email.includes("@")) {
            setErrorEmail("E-mail mal formateado.")
            return;
        };

        let usersConvertidos = JSON.parse(usersEnStorage);
        let usersFilatrado = usersConvertidos.filter(
            (user) => user.email === email);


        if (usersFilatrado.length === 0) {
            setErrorUser("El usuario ingresado no existe")
            return;
        };

        if (usersFilatrado[0].password !== password) {
            setErrorPassword("Las credenciales ingresadas son invalidas")
            return;
        };

        if (usersFilatrado.length > 0 && usersFilatrado[0].password === password) {
            cookies.set("user-auth-cookie", usersFilatrado[0].email);

            sessionStorage.setItem(
                "usuarioEnSesion",
                JSON.stringify({ sesionActiva: true }));

            props.history.push("/");
        };

    };

        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(event) => submit(event)}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email"
                                name="email"
                                value={email}
                                onChange={(event) => preventSubmitEmail(event)} className="form-control" />
                            <p>{errorEmail}</p>
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password"
                                name="password"
                                value={password}
                                onChange={(event) => preventSubmitPassword(event)} className="form-control" />
                            <p>{errorPassword}</p>
                            <p>{errorUser}</p>

                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/Register">Register</Link></p>
                </div>
            </div>

        );
    };

export default withRouter(FormLogin);
