import React, {Component} from 'react';
import Die from './Die'
import './RollDice.css'

class RollDice extends Component{
    constructor(props){
        super(props);

        let vals = [];
        for(var i = 0; i < this.props.qtt; i++){
            vals.push(Math.ceil(Math.random()*6));
        } 

        this.state = {
            diceVals: vals,
            isRolling: false
        }   

        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        colors: ['pink', 'orange', 'yellow', 'green', 'blue', 'purple']
    }

    handleClick(e){
        let newVals = [];
        for(var i = 0; i < this.props.qtt; i++){
            let val = Math.ceil(Math.random() * 6);
            newVals.push(val);
        }
        this.setState({diceVals: newVals, isRolling: true});

        setTimeout(() => {
            this.setState({isRolling: false})
        }, 500)
    }
    
    render(){
        let dice;
        let colors = this.props.colors;
        dice = this.state.diceVals.map((d,i) => (
            <Die num={d} color={colors[d-1]} isRolling={this.state.isRolling}/>
        ));
        let buttonMsg;
        if(this.state.isRolling) buttonMsg = 'Rolling...';
        else buttonMsg = 'Roll Dice';

        return(
            <div className='RollDice'>
                <div className='RollDice-dice'>
                    {dice}
                </div>
                <button
                    disabled={this.state.isRolling}
                    className='RollDice-button'
                    onClick={this.handleClick}>
                        {buttonMsg}
                </button>
            </div>
        )
    }
}

export default RollDice;