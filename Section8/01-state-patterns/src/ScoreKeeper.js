import React, {Component} from 'react';

class ScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {score: 0};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }

    singleKill(e){
        // not ideal way to do it
        this.setState({score: this.state.score + 1});
    }

    add1(st){
        return {score: st.score +1};
    }

    tripleKill(e){
        // this does not work
        /* this.setState({score: this.state.score + 1});
        this.setState({score: this.state.score + 1});
        this.setState({score: this.state.score + 1}); */

        // this works!
        /* this.setState( (curState) => {
            return {score: curState.score + 1};
        })
        this.setState( (curState) => {
            return {score: curState.score + 1};
        })
        this.setState( (curState) => {
            return {score: curState.score + 1};
        }) */

        // this also works!
        this.setState(this.add1);
        this.setState(this.add1);
        this.setState(this.add1);
    }

    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;