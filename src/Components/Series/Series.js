import React, { Component } from "react";

class Series extends Component{
    constructor(props){
        super(props);
        this.state={
            series: []
        };
    }
    componentDidMount(){
        let url= "https://api.themoviedb.org/3/tv/popular?api_key=cd21534ccf3ef8b078f7ac273cdf32ca";


        fetch(url)
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    series: data.results
                });
            })
            .catch(error => console.log(error));
            
    }

    render(){
        return(
            <div className="row">
                
            </div>
        )
    }
}

export default Series;