import React, { Component } from "react";

class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date()
        }

        console.log('IN CONSTRUCTOR');
    }

    componentDidMount(){
        console.log('IN COMPONENT DID MOUNT');
        this.timerID = setInterval(() => {
            this.setState({time: new Date()});
        }, 1000)
    }

    componentDidUpdate(){
        console.log('IN COMPONENT DID UPDATE');
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render() {
        console.log('IN RENDER');
        return <h1>{this.state.time.getSeconds()}</h1>;
    }
}

export default Timer;