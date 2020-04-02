import React, {Component} from 'react';
import LottoBall from './LottoBall';
import './Lottery.css'

class Lottery extends Component{
    static defaultProps = {
        title: 'Lottery',
        numBalls: 6,
        maxNum: 40
    }

    constructor(props){
        super(props);
        this.state = {
            numbers: []
        }
        this.genNums = this.genNums.bind(this);
    }

    genNums(e){
        let possibs = [];
        let newNums = [];
        for(var i = 1; i <= this.props.maxNum; i++){
            possibs.push(i);
        }

        for(var i = 0; i < this.props.numBalls; i++){
            let rand = Math.floor(Math.random() * possibs.length);
            newNums.push(possibs[rand]);
            possibs.splice(rand,1);
        }

        this.setState({numbers: newNums})
    }

    render(){
        let {title} = this.props;
        let lottoBalls = this.state.numbers.map((ball) => {
            return <LottoBall num={ball}/>
        });

        return(
            <div className='Lottery'>
                <h1>{title}</h1>
                <div className='Lottery-balls'>
                    {lottoBalls}
                </div>
                <button onClick = {this.genNums}>Generate Numbers</button>
            </div>
        )
    }
}

export default Lottery;