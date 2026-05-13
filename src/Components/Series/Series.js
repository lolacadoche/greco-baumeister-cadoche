import React, { Component, useState } from "react";
import Serie from "../Serie/Serie";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Series(){
    const[series, setSeries]= useState([])

    useEffect(() => 
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca")
            .then(response => response.json())
            .then(data => {
                setSeries(data.results.slice(0, 4))})
            .catch(error => console.log(error)), [])
   
        return (
            <div className="row">
                <Link to="/series">
                    <button className="btn btn-primary">Ver todas</button>
                </Link>
                <section className="row cards" id="tv-show">
                    {series ? (
                        series.map((series) => (
                            <Serie key={series.id} id={series.id} titulo={series.name} name={series.name} overview={series.overview} image={`https://image.tmdb.org/t/p/w342${series.poster_path}`} />
                        ))
                    ) : (<h3>Cargando...</h3>)}
                </section>
            </div>
        );
    };


export default Series;