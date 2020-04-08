import React, { Component } from "react";
import './TodoForm.css'

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: this.props.val
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleSubmit(evt){
        evt.preventDefault();
        if(this.props.edit){
            this.props.editTodo(this.state);
        } else {
            this.props.addTodo(this.state);
            this.setState({todo: ''});
        }
    }

    render(){
        let classes = 'TodoForm' + (this.props.edit ? ' TodoForm-edit' : '');
        return(
            <form className={classes} onSubmit={this.handleSubmit}>
                <input
                    className='TodoForm-input'
                    placeholder='New Todo'
                    name='todo'
                    value={this.state.todo}
                    onChange={this.handleChange}
                />
                {
                    !this.props.edit
                    ? <button><i className="fas fa-plus"></i></button>
                    : <button><i className="far fa-save"></i></button>
                }
            </form>
        )
    }
}

export default TodoForm;