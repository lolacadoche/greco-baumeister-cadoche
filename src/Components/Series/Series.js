import React, { Component } from "react";
import Series from "../../Screen/Series/Series";

class Series extends Component{
    constructor(props){
        super(props);
        this.state={
            series: []
        };
    }
    componentDidMount(){
        let url= "";

        if(this.props.link === "popularShows"){
            url= "https://www.themoviedb.org/tv";
        } else if(this.props.link === "nowPlaying"){
            url = "https://www.themoviedb.org/tv/airing-today";
        }

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