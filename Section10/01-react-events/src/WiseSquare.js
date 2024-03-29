import React, {Component} from 'react';
import './WiseSquare.css';

class WiseSquare extends Component{
    dispenseWisdom(){
        let messages = [
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without eduacting the heart is no eduaction at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ];
        let rIndex = Math.floor(Math.random()*messages.length);
        console.log(messages[rIndex]);
    }

    render(){
        return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>😁️</div>
    }
}

export default WiseSquare;