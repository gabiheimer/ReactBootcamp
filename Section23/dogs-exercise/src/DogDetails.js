import React, { Component } from "react";
import './DogDetails.css';
import { Redirect } from "react-router-dom";

class DogDetails extends Component{
    constructor(props){
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    handleBack(){
        this.props.history.push('/dogs')
    }

    render(){
        let name = this.props.match.params.name;
        let dog = this.props.dogs.find(d => d.name === name);

        if(!dog){
            return <Redirect to='/dogs'/>
        }

        return(
            <div className='DogDetails'>
                <div className='DogDetails-details'>
                    <img src={dog.src} />
                    <h1>{name}</h1>
                    <h3>{dog.age} years old</h3>
                    <div className='DogDetails-facts'>
                        {dog.facts.map((f,idx) => <div key={idx} className='fact'>{f}</div>)}
                    </div>
                    <div className='DogDetails-button'>
                        <button onClick={this.handleBack}>Go back</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default DogDetails;