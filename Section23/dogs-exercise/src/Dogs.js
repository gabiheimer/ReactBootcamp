import React, { Component } from "react";
import './Dogs.css';
import { NavLink, Link } from "react-router-dom";

class Dogs extends Component{
    renderDogs(){
        return (
            <div className='Dogs-list'>
                {this.props.dogs.map(d => (
                    <div key={d.name} className='Dogs-dog'>
                        <Link to={`/dogs/${d.name}`}>
                            <img src={d.src} />
                            <h1>{d.name}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }

    render(){
        return(
            <div className='Dogs'>
                <h1 className='Dogs-title'>Meet our dogs!</h1>
                {this.renderDogs()}
            </div>
        )
    }
}

export default Dogs;