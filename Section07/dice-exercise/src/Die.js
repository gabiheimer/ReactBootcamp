import React, {Component} from 'react';
import './Die.css'

class Die extends Component{
    render(){
        let num = this.props.num;
        let numbers = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five', 
            6: 'six'
        }
        let die = "fas fa-dice-" + numbers[num];
        let animate = this.props.isRolling ? 'animation' : '';
        return(
            <div className='Die'>
                < i className={die + ' ' + this.props.color + ' ' + animate}></i>
            </div>
        )
    }
}

export default Die;