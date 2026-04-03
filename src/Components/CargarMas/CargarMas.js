import React, { Component } from "react";

class CargarMas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultados: [],
            page: 1
        };
    }

    componentDidMount() {
        this.fetchData(1);
    }

    fetchData(page) {
        fetch(`https://api.themoviedb.org/3/discover/${this.props.tipo}?api_key=TU_API_KEY&page=${page}`)
            .then(res => res.json())
            .then(data =>
                this.setState({
                    resultados: page === 1 ? data.results : this.state.resultados.concat(data.results),
                    page: page
                })
            )
            .catch(err => console.log(err));
    }

    cargarMas = () => {
        this.fetchData(this.state.page + 1);
    };

    render() {
        return (
            <div>
                <section className="row">
                    {this.state.resultados.map((item, i) => (
                        <div key={i}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                            <p>{item.title || item.name}</p>
                        </div>
                    ))}
                </section>

                <button onClick={this.cargarMas}>
                    Cargar más
                </button>
            </div>
        );
    }
}

export default CargarMas;