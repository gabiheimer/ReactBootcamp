import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import {withStyles} from '@material-ui/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles/PaletteListStyles';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

class PaletteList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDialogOpen: false,
            deleteId: ''
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }

    openDialog(id){
        this.setState({isDialogOpen: true, deleteId: id});
    }

    closeDialog(){
        this.setState({isDialogOpen: false, deleteId: ''});
    }

    handleDelete(){
        this.props.deletePalette(this.state.deleteId);
        this.closeDialog();
    }

    render(){
        const {palettes, classes} = this.props;
        const {isDialogOpen} = this.state;

        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(p => (
                            <CSSTransition key={p.id} classNames='fade' timeout={500}>
                                <MiniPalette 
                                    {...p} 
                                    key={p.id}
                                    openDialog={this.openDialog}
                                    handleClick={() => this.goToPalette(p.id)}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog
                    open={isDialogOpen}
                    aria-labelledby='delete-palette-dialog'
                    onClose={this.closeDialog}
                >
                    <DialogTitle id='delete-palette-dialog'>Do You Want To Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);