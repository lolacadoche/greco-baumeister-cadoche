import React from "react";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function FormRegister(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorUser, setErrorUser] = useState("");

    function controlarCambios(event) {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    };

    function submit(event) {
        event.preventDefault();

        let usuarioACrear = {
            email: email,
            password: password,
            createdAt: Date.now()
        };


        if (!email.includes("@")) {
            setErrorEmail("E-mail mal formateado.")
            return;
        }
        if (password.length < 6) {
            setErrorPassword("La contraseña debe tener al menos 6 caracteres.")
            return;
        }

        let userStorage = localStorage.getItem("users");
        console.log(userStorage);

        if (userStorage !== null) {
            let usersParseado = JSON.parse(userStorage)
            let usersFiltrado = usersParseado.filter(
                user => user.email === email
            );
            if (usersFiltrado.length > 0) {
                setErrorUser("Ya existe un usuario con el mail ingresado.")
                return;

            } else {
                usersParseado.push(usuarioACrear);
                let usersEnJson = JSON.stringify(usersParseado)
                localStorage.setItem("users", usersEnJson);
            };

        } else {
            let usersInicial = [usuarioACrear];
            let usersEnJson = JSON.stringify(usersInicial);
            localStorage.setItem("users", usersEnJson);


        };

        props.history.push("/login");
    };
    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form onSubmit={(event) => submit(event)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" value={email} onChange={(event) => controlarCambios(event)} className="form-control" />
                        <p>{errorEmail}</p>
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="text" name="password" value={password} onChange={(event) => controlarCambios(event)} className="form-control" />
                        <p>{errorPassword}</p>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                    <p>{errorUser}</p>
                </form>
                <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
            </div>
        </div>

    );
};





export default withRouter(FormRegister);