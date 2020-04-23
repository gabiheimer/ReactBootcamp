import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css'
import Navbar from "./Navbar";

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    render(){
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(c => (
            <ColorBox background={c.hex} name={c.name} />
        ));

        return(
            <div className='Palette'>
                {/* Navbar */}
                <Navbar changeLevel={this.changeLevel} level={level}/>
                <div className='Palette-colors'>
                    {/* color boxes */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        );
    }
}

export default Palette;