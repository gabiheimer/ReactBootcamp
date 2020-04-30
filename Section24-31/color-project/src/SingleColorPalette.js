import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);

        this.state = {
            format: 'hex'
        }

        this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(palette, wantedColor){
        let shades = []
        let allColors = palette.colors;

        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === wantedColor)
            );
        }

        return shades.slice(1);
    }

    changeFormat(format){
        this.setState({format: format});
    }

    render(){
        const {format} = this.state;
        const {emoji, paletteName, id} = this.props.palette;
        const colorBoxes = this._shades.map(c => (
            <ColorBox 
                key={c.name}
                name={c.name}
                background={c[format]}
                showingFullPalette={false}
            />
        ))

        return(
            <div className='SingleColorPalette Palette'>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${id}`} className='back-button'>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter
                    emoji={emoji}
                    paletteName={paletteName}
                />
            </div>
        )
    }
}

export default SingleColorPalette;