import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
  }

  static defaultProps = {
    numbers: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: 1
  }

  handleToggle(){
    this.props.handleClick(this.props.idx);
  }

  render() {
    let classes = 'Die' + (this.props.locked ? ' Die-locked' : '');
    classes += (this.props.rolling ? ' Die-rolling' : '');
    return (
      <button
        className={classes}
        onClick={this.handleToggle}
      >
        <i className={`fas fa-dice-${this.props.numbers[this.props.val-1]}`}></i>
      </button>
    );
  }
}

export default Die;
