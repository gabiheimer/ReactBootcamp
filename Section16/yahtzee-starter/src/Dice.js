import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(idx){
    this.props.handleClick(idx);
  }

  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.handleToggle}
          rolling={this.props.rolling && !this.props.locked[idx]}
          val={d}
          locked={this.props.locked[idx]}
          idx={idx}
          key={idx} />
      )}
    </div>
  }
}

export default Dice;