import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import styles from './styles/PaletteStyles';

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
        const {classes} = this.props;
        const colorBoxes = this._shades.map(c => (
            <ColorBox 
                key={c.name}
                name={c.name}
                background={c[format]}
                showingFullPalette={false}
            />
        ))

        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className={classes.colors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
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

export default withStyles(styles)(SingleColorPalette);