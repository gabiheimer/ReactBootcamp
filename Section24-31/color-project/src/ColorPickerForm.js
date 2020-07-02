import React, {Component} from 'react';
import { Button } from '@material-ui/core';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {ChromePicker} from 'react-color';
import { withStyles } from '@material-ui/styles';

import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentColor: 'teal',
            newColorName: ''
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => (
            this.props.colors.every(
              ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        ));
    
        ValidatorForm.addValidationRule('isColorUnique', (value) => (
            this.props.colors.every(
              ({color}) => color !== this.state.currentColor
            )
        ));
    }

    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex});
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.setState({newColorName: ''});
        this.props.addNewColor(newColor);
    }

    render(){
        const {paletteFull, classes} = this.props;
        const {currentColor, newColorName} = this.state;

        return(
            <div>
                <ChromePicker 
                    color={currentColor} 
                    onChange={this.updateCurrentColor}
                    className={classes.picker}
                />

                {/* Add Color Area */}
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <TextValidator 
                        placeholder='Color Name'
                        variant='filled'
                        margin='normal'
                        className={classes.colorNameInput}
                        name = 'newColorName'
                        value = {newColorName}
                        onChange = {this.handleChange}
                        validators = {['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages = {['this field is required', 'color name must be unique', 'color already used']}
                    />
                    <Button 
                        className={classes.addColor}
                        variant='contained' 
                        type = 'submit'
                        color='primary' 
                        disabled={paletteFull}
                        style={{backgroundColor: !paletteFull && currentColor}}
                    >
                        {paletteFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);