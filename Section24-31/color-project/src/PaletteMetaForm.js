import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPaletteName: '',
            stage: 'name'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => (
            this.props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        ));
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(emoji){
        const obj = {
            newPaletteName: this.state.newPaletteName,
            newEmoji: emoji.native
        };

        this.props.handleSubmit(obj);
        this.setState({stage: '', newPaletteName: ''});
    }

    showEmojiPicker(){
        this.setState({stage: 'emoji'});
    }
    
    render() {
        const {newPaletteName, stage} = this.state;
        const {closeForm} = this.props;

        return (
            <div>
                <Dialog
                    open={stage === 'emoji'}
                    onClose={closeForm}
                >
                    <DialogTitle id="form-dialog-title">Pick an Emoji for your Palette</DialogTitle>
                    <Picker onSelect={this.handleSubmit} />
                </Dialog>
                <Dialog
                    open={stage === 'name'}
                    onClose={closeForm}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Name Your Palette</DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker} instantValidate={false}>
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new palette. Make sure it's unique!
                            </DialogContentText>
                            <TextValidator 
                                name = 'newPaletteName'
                                label = 'Palette Name'
                                value = {newPaletteName}
                                onChange = {this.handleChange}
                                fullWidth
                                margin='normal'
                                validators = {['required', 'isPaletteNameUnique']}
                                errorMessages = {['palette name is required', 'name already used']}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeForm} color="primary">
                                Cancel
                            </Button>
                            <Button 
                                variant = 'contained' 
                                color = 'primary'
                                type = 'submit'
                                >
                                Save Palette
                            </Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;