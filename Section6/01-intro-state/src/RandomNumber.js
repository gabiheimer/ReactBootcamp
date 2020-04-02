import React, {Component} from 'react';

class RandomNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let rand = Math.ceil(Math.random() * 10);
        this.setState({number: rand});
    }

    render(){
        let msg;
        if(this.state.number === 7){
            msg = <h2>YOU WIN!!!!</h2>
        } else {
            msg = <button onClick={this.handleClick}>Random Number</button>
        }

        return(
            <div>
                <h1>Number is: {this.state.number}</h1>
                {msg}
            </div>
        );
    }
}

export default RandomNumber;