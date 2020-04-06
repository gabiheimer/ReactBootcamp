import React, {Component} from 'react';
import './WiseSquare.css';

class WiseSquareWithProps extends Component{
    constructor(props){
        super(props);
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }

    static defaultProps = {
        messages: [
            "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
            "Educating the mind without eduacting the heart is no eduaction at all.",
            "Not everything that is faced can be changed, but nothing can be changed until it is faced."
        ]
    }

    dispenseWisdom(){
        let rIndex = Math.floor(Math.random()*this.props.messages.length);
        console.log(this.props.messages[rIndex]);
    }

    render(){
        // binding inline
        //return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom.bind(this)}>😁️</div>

        // arrow function inline
        //return <div className='WiseSquare' onMouseEnter={() => this.dispenseWisdom()}>😁️</div>

        // binding in constructor
        return <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>😁️</div>
    }
}

export default WiseSquareWithProps;