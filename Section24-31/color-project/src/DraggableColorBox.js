import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

import styles from './styles/DraggableColorBoxStyles'; 

function DraggableColorBox(props){
    const {classes, name, handleDelete, color} = props;
    return(
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleDelete}/>
            </div>
        </div>
    );
}

export default SortableElement(withStyles(styles)(DraggableColorBox));