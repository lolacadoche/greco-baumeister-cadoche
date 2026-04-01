import React, { Component } from "react";

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            algo: ""
        };
    }

    algo() {
        this.setState({
            alto: ""
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Detalle;