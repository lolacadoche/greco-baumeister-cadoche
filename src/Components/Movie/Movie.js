import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Movie(){
        const[favorito, setFavorito] = useState(false);
        const[boton, setBoton] = useState("Ver más");
        const[claseOcultar, setClaseOcultar] = useState("hide");

    useEffect(() => { 
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"))
        if (peliculaslocalStorage) {
            let peliculaEntrada = peliculaslocalStorage.includes(props.id);

            if (peliculaEntrada) {
                setFavorito(true)
            };
        }}, [])
       
    function cambio() {
        if (boton === "Ver más") {
            setBoton("Ver menos")
            setClaseOcultar("show")
        } else {
            setBoton("Ver más")
            setClaseOcultar("hide")
        };
    };
    
    function favoritos() {
        let id = props.id
        let peliculaslocalStorage = JSON.parse(localStorage.getItem("peliculasfavoritas"));
        let arrayasubir = [];
        if (peliculaslocalStorage === null) {
            arrayasubir.push(id);
            localStorage.setItem("peliculasfavoritas", JSON.stringify(arrayasubir));
            setFavorito(true)
        }
        else {
            peliculaslocalStorage.push(id)
            localStorage.setItem("peliculasfavoritas", JSON.stringify(peliculaslocalStorage))
            setFavorito(true)
        };
    };

    function quitarDeFavoritos() {
        let peliculaslocalStorage = localStorage.getItem("peliculasfavoritas")
        if (peliculaslocalStorage !== null) {
            let favoritasParseadas = JSON.parse(peliculaslocalStorage)
            let favoritosFiltrados = favoritasParseadas.filter(id => {
                return id != props.id
            });
            let string = JSON.stringify(favoritosFiltrados)
            localStorage.setItem("peliculasfavoritas", string)
            setFavorito(true)
        };
    };

        let sesion = sessionStorage.getItem("usuarioEnSesion");
        let userLogueado = false;

        if (sesion !== null) {
            let sesionParseada = JSON.parse(sesion);
            if (sesionParseada.sesionActiva === true) {
                userLogueado = true;
            };
        };
        let botonFav = null;
        if (userLogueado) {
            if (favorito) {
                botonFav = (
                    <button onClick={() => quitarDeFavoritos()} className='btn btn-primary'>Sacar de favoritos</button>)
            } else {
                botonFav = (<button onClick={() => favoritos()} className="btn alert-info">♥️</button>)
            };
        } else {
            botonFav = null
        };

        return (
            <article className='single-card-movie'>
                <img src={props.image} alt={props.name} className="card-img-top" />

                <div className="cardBody">
                    <h5 className="card-title">{props.name}</h5>
                    <section className={`extra ${claseOcultar}`}>
                        <p className="card-text">{props.overview}</p>
                    </section>
                    <div className="card-buttons">
                        <button onClick={() => cambio()} className='btn btn-primary'>{boton} </button>
                        <Link to={`/DetallePelicula/id/${props.id}`}>
                            <button className='btn btn-primary' >Ver detalle</button>
                        </Link>
                    </div>
                    <div className="fav-boton">{botonFav}</div>
                </div>
            </article>
        );
    };


export default Movie;


