import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FormRegister extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            errorEmail: "",
            errorPassword: "",
            errorUser: ""
        }
    }

    controlarCambios(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
    sumbit(event){
        event.preventDefault();

        let usuarioACrear = {
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now()
        }

        
        if(!this.state.email.includes("@")){
            this.setState({
                errorEmail: "E-mail mal formateado."
            })
            return;
        }
        if(this.state.password.length < 6 ){
            this.setState({
                errorPassword: "La contraseña debe tener al menos 6 caracteres."
            })
            return;
        }
        
        let userStorage = localStorage.getItem("users");
        if(userStorage !== null){
            let usersParseado = JSON.parse(userStorage)
            let usersFiltrado = usersParseado.filter(
                user => user.email === this.state.email
            )
            if(usersFiltrado.length > 0){
                this.setState({
                    errorUser:"Ya existe un usuario con el mail ingresado."
                })
                return;
            } else{
                usersParseado.push(usuarioACrear);
                let usersEnJson = JSON.stringify(usersParseado)
                localStorage.setItem("users", usersEnJson);
            }
            this.props.history.push("/login")
        } else{
            let usersInicial = [usuarioACrear];
            let usersEnJson = JSON.stringify(usersInicial);
            localStorage.setItem("users", usersEnJson);
            this.props.history.push("/login")

            }
    }
     render(){
            return(
                <div className="row justify-content-center">
                    <div className="col-md-6">
                    <form onSubmit={(event) => this.sumbit(event)}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" value={this.state.email} onChange={(event) => this.controlarCambios(event)} className="form-control"/>
                            <p>{this.state.errorEmail}</p>
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input type="text" name="password" value={this.state.password} onChange={(event) => this.controlarCambios(event)} className="form-control"/>
                            <p>{this.state.errorPassword}</p>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                    </form>
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link></p>
                    </div>
                </div>

            )
        }

}
export default FormRegister;
