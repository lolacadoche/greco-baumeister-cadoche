import React, { Component } from "react";

class CargarMas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            page: false
        };
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/discover/${this.props.tipo}?api_key=TU_API_KEY&page=1`)
            .then(res => res.json())
            .then(data => this.setState({
                resultados: data.results,
                nextPage: data.page < data.total_pages
                    ? `https://api.themoviedb.org/3/discover/${this.props.tipo}?api_key=TU_API_KEY&page=${data.page + 1}`
                    : null
            }))
            .catch(error => console.log(error));
    }


    cargarMas = () => {
        fetch(this.state.nextPage)
            .then(res => res.json())
            .then(data => this.setState({
                resultados: this.state.resultados.concat(data.results),
                nextPage: data.page < data.total_pages
                    ? `https://api.themoviedb.org/3/discover/${this.props.tipo}?api_key=TU_API_KEY&page=${data.page + 1}`
                    : null
            }))
            .catch(error => console.log(error));
    };
    render() {
        return (
            <div>
                <section className="row">
                    {this.state.resultados.map((item, i) => (
                        <div key={i}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                            />
                            <p>{item.title || item.name}</p>
                        </div>
                    ))}
                </section>
    
                {this.state.nextPage && (
                    <button onClick={this.cargarMas}>
                        Cargar más
                    </button>
                )}
            </div>
        );
    }
};


export default CargarMas;