import React, { Component } from "react";


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facets: [],
            isLoaded: false,
  
        }
    }
    componentDidMount() {
        fetch('https://api20201029163207.azurewebsites.net/facet')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }
  
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>;
        }
        else {
            return (
                <div className="Data">
                    Data has been loaded.
                </div>
            );
        }

    }
}
export default Data;