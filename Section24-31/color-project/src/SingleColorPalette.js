import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
    }, colors: {
        height: "90%"
    }, goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255,0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none'
            }
    }
}

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