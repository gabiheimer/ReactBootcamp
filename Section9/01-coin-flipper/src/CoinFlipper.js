import React, {Component} from 'react';
import Coin from './Coin';
import './CoinFlipper.css'

class CoinFlipper extends Component{
    constructor(props){
        super(props);
        this.state = {
            head: 0,
            tail: 0,
            side: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let rand = Math.ceil(Math.random() * 2);
        this.setState((curS) => {
            return {
                side: rand,
                head: curS.head + (rand === 1 ? 1 : 0),
                tail: curS.tail + (rand === 2 ? 1 : 0)
            };
        });
    }

    render(){
        let {head, tail, side} = this.state;
        return(
            <div className = 'CoinFlipper'>
                <h1>Let's Flip a Coin!</h1>
                <Coin side={side} />
                <button onClick={this.handleClick}>Flip me!</button>
                <p>Out of {head+tail} flips, 
                there have been {head} heads and {tail} tails.</p>
            </div>
        )
    }
}

export default CoinFlipper;