import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import './Palette.css'

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    }, colors: {
        height: "90%"
    }
}

class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level: 500, format: 'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level){
        this.setState({level});
    }

    changeFormat(format){
        this.setState({format: format});
    }

    render(){
        const {colors, paletteName,emoji, id} = this.props.palette;
        const {classes} = this.props;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(c => (
            <ColorBox
                key={c.id} 
                background={c[format]} 
                name={c.name} 
                colorId={c.id}
                paletteId={id}
                showingFullPalette={true}
            />
        ));

        return(
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat} changeLevel={this.changeLevel} level={level} showingAllColors/>
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter 
                    paletteName={paletteName}
                    emoji={emoji}
                />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);