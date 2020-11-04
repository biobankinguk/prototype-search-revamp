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
        fetch ('https://api20201029163207.azurewebsites.net/facet')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                facets: json, 
            })
        });
    }


    render() {
        var { isLoaded, facets } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (                   
                <div className="Data">
                    <ul>
                        {facets.map(item => (
                            <li>
                               Body System Area: {item.bodySystemArea}
                               Sample Type: {item.sampleType}
                               Age: {item.age}
                               Sex: {item.sex} 
                               Consent Restrictions: {item.consentRestrictions}
                            </li>
                        ))}
                    </ul>
                </div>


            )
        }
        }
    }

export default Data;