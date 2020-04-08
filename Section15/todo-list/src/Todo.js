import React, { Component } from "react";
import './Todo.css';

class Todo extends Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleComplete(evt){
        this.props.toggleComplete(this.props);
    }

    handleEdit(evt){
        this.props.editTodo(this.props);
    }

    handleDelete(evt){
        this.props.deleteTodo(this.props);
    }

    render(){
        let pClasses = 'Todo-text' + (this.props.complete ? ' Todo-complete' : '');
        return(
            <li className='Todo'>
                <div className='Todo-div'>
                    <p className={pClasses} onClick={this.handleComplete}>{this.props.todo}</p>
                    <div className='Todo-buttons'>
                        <button onClick={this.handleEdit}><i className="fas fa-pencil-alt"></i></button>
                        <button onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Todo;