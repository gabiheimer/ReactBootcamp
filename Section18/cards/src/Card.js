import React, { Component } from "react";
import './Card.css';

class Card extends Component{
    constructor(props){
        super(props);
        this.getStyles = this.getStyles.bind(this);
    }

    getStyles(){
        let {translatex, translatey, rotation} = this.props;
        translatex -= 5;
        translatey -= 5;
        rotation -= 45;

        return {transform: `rotate(${rotation}deg) translate(${translatex}px,${translatey}px)`};
    }

    render(){
        return(
            <img
                src={this.props.img}
                alt={`${this.props.value} of ${this.props.suit}`}
                className='Card'
                style={this.getStyles()}
            />
        )
    }
}

export default Card;