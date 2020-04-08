import React, {Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component{
    static defaultProps = {
        colors: [
            '#3fe0d0',
            '#b0dfe5',
            '#95c8d8',
            '#7ef9ff',
            '#588bae',
            '#89cdd0',
            '#81d8d0',
            '#4682b4',
            '#57a0d3',
            '#4f97a3',
            '#7285a5',
            '#73c2fb',
            '#008081',
            '#6593f5',
            '#008ecc',
            '#0f52ba',
            '#0080ff',
            '#1034a6',
            '#0e4d92',
            '#000080',
            '#003152',
            '#1d2951',
            '#111e6c'
        ]
    }

    constructor(props){
        super(props);
        this.state={color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let idx;
        do{
            idx = Math.floor(Math.random() * this.props.colors.length);
            console.log(idx);
        } while(this.props.colors[idx] === this.state.color)

        this.setState((st) => {
            return {color: this.props.colors[idx]};
        })
    }

    render(){
        let {color} = this.state;
        return(
            <div className='ColorBox'
            style={{background: color}}
            onClick={this.handleClick}>
            </div>
        )
    }
}

export default ColorBox;