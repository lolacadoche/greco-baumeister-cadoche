import React, { Component } from "react";

class FormRegister extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            error: ""
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            createdAt: Date.now()
        }

        if(this.state.username.length <= 3 && this.state.username.length > 7){
            this.setState({
                error: "La extensión del username debe ser de 3 a 7 caracteres."
            })
            return;
        }
        if(this.state.email.includes("@")){
            this.setState({
                error: "email mal formateado."
            })
            return;
        }
        if(this.state.password.length < 5 && this.state.password.length > 12){
            this.setState({
                error: "La extensión del password debe ser de 5 a 12 caracteres."
            })
            return;
        }
        
        let userStorage = localStorage.getItem("users");
        if(userStorage !== null){
            let usersParseado = JSON.parse(userStorage)
            let usersFiltrado = usersParseado.filter(
                user => user.mail === this.state.email
            )
            if(usersFiltrado.length > 0){
                this.setState({
                    error:"Ya existe un usuario con el mail ingresado."
                })
            }
        }


    }
}
export default FormRegister;
