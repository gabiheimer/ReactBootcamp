import React, { Component } from "react";

class Box extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.deleteBox(this.props);
    }

    render(){
        let {color, width, height} = this.props;
        return (
            <div>
                <div style={{background: color, width: width, height: height, display: 'inline-block'}}></div>
                <button onClick={this.handleClick}>X</button>
            </div>
        )
    }
}

export default Box;