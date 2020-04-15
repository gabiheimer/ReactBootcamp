import React, { Component } from "react";

class Meal extends Component{
    render(){
        const {food, drink} = this.props.match.params;
        return(
            <div>
                <h1>I am eating {food} and drinking {drink} tonight!</h1>
            </div>
        )
    }
}

export default Meal;