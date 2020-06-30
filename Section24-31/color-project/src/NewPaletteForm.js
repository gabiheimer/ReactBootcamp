import React, {Component} from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: 'flex',
    alignItems: 'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    width: '100%'
  },
  button: {
    width: '50%'
  }
});

class NewPaletteForm extends Component{
    static defaultProps = {
      maxColors: 20
    }

    constructor(props){
      super(props);
      this.state = {
        open: true,
        colors: [...this.props.palettes[0].colors]
      }
      this.handleDrawerClose = this.handleDrawerClose.bind(this);
      this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
      this.addNewColor = this.addNewColor.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeColor = this.removeColor.bind(this);
      this.clearColors = this.clearColors.bind(this);
      this.addRandomColor = this.addRandomColor.bind(this);
      this.onSortEnd = this.onSortEnd.bind(this);
    }

    handleDrawerOpen() {
        this.setState({ open: true });
    };

    handleDrawerClose() {
        this.setState({ open: false });
    };
    
    addNewColor(newColor) {
      this.setState({colors: [...this.state.colors, newColor]});
    }

    handleChange(evt){
      this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(newPaletteName){
      const newPalette = {
        paletteName: newPaletteName,
        colors: this.state.colors,
        id: newPaletteName.toLowerCase().replace(/ /g, '-')
      };

      this.props.savePalette(newPalette);
      this.props.history.push('/');
    }

    removeColor(colorName){
      this.setState({
        colors: this.state.colors.filter(color => color.name !== colorName)
      });
    }

    clearColors(){
      this.setState({colors: []});
    }

    addRandomColor(){
      const randomPaletteIdx = Math.floor(Math.random()*this.props.palettes.length);
      const randomColorIdx = Math.floor(Math.random()*this.props.palettes[randomPaletteIdx].colors.length);
      const randomColor = this.props.palettes[randomPaletteIdx].colors[randomColorIdx];
      this.setState({
        colors: [...this.state.colors, randomColor]
      });
    }

    onSortEnd({oldIndex, newIndex}){
      this.setState(({colors}) => ({
        colors: arrayMove(colors, oldIndex, newIndex)
      }));
    }

    render() {
        const { classes, maxColors, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteFull = colors.length >= maxColors

        return (
            <div className={classes.root}>
                <PaletteFormNav 
                  handleDrawerOpen={this.handleDrawerOpen} 
                  handleSubmit={this.handleSubmit} 
                  palettes={palettes} 
                  open={open}
                />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />

                    <div className={classes.container}>
                      <Typography variant='h4' gutterBottom>Design Your Palette</Typography>

                      {/* Color Buttons */}
                      <div className={classes.buttons}>
                        <Button 
                          variant='contained' 
                          color='secondary'
                          onClick={this.clearColors}
                          className={classes.button}
                        >
                          Clear Palette
                        </Button>
                        <Button 
                          variant='contained' 
                          color='primary'
                          onClick={this.addRandomColor}
                          disabled={paletteFull}
                          className={classes.button}
                        >
                          {paletteFull ? 'Palette Full' : 'Random Color'}
                        </Button>
                      </div>

                      <ColorPickerForm
                        paletteFull={paletteFull}
                        addNewColor={this.addNewColor}
                        colors={this.state.colors}
                      />
                    </div>
                    
                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />

                    {/* Color Palette */}
                    <DraggableColorList 
                      colors={this.state.colors} 
                      removeColor={this.removeColor} 
                      axis='xy'
                      onSortEnd={this.onSortEnd}
                    />
                </main>
            </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(NewPaletteForm);