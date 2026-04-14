import React, {Component} from "react";
import FormRegister from "../../Components/FormRegister/FormRegister";

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
}
render()
    return(
        <section>
            <h2>Register</h2>
            <FormRegister history={this.props.history}/>
        </section>
    )


export default Register;


