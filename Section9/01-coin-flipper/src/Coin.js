import React, {Component} from 'react';
import './Coin.css'
import headP from './head.jpg';
import tailP from './tail.jpg';

class Coin extends Component{
    render(){
        let coin, alt = '';
        if(this.props.side === 1){
            coin = headP;
            alt = 'head';
        } else if(this.props.side === 2){
            coin = tailP;
            alt = 'tail';
        }

        return(
            <img className='Coin' alt={alt} src={coin}/>
        );
    }
}

export default Coin;