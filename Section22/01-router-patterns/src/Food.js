import React, { Component } from "react";
import {Redirect} from 'react-router-dom';

class Food extends Component{
    render(){
        console.log(this.props)
        const name = this.props.match.params.name;
        return(
            <div>
                {/\d/.test(name)
                    ? <Redirect to='/'/> 
                    : <h1>I love to eat {name}</h1>
                }
            </div>
        )
    }
}

export default Food;