import React, { Component } from "react";
import FormRegister from "../../Components/FormRegister/FormRegister";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <section>
                <h2 className="alert alert-primary">Register</h2>
                <FormRegister />
            </section>
        );
    };
};

export default Register;


