import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import Message from "./Message";

class Soda extends Component{
    render(){
        return(
            <div>
                <NavLink to='/'>Go back</NavLink>
                <Message>
                    <h1>Soda</h1>
                </Message>
            </div>
        )
    }
}

export default Soda;