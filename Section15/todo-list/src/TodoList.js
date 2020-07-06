import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import uuid from 'uuid/v4';
import './TodoList.css'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem('TodoItems')) || [],
            isEditing: ''
        }

        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this)
    }

    addTodo(todo){
        let newTodo = {...todo, id: uuid(), complete: false};
        this.setState(curSt => {
            return ({todos : [...curSt.todos, newTodo]})
        });
    }

    deleteTodo(todo){
        this.setState(curSt => {
            return {todos: curSt.todos.filter(t => (t.id !== todo.id))}
        });
    }

    enableEdit(todo){
        this.setState({isEditing: todo.id});
    }

    editTodo(todo){
        let newTodo = {...todo, id: this.state.isEditing}
        let newTodos = this.state.todos.map(t => {
            if(t.id !== this.state.isEditing) return t;
            else return newTodo;
        });
        this.setState({todos: newTodos, isEditing:''});
    }

    toggleComplete(todo){
        let newTodos = this.state.todos.map(t => {
            if(t.id !== todo.id) return t;
            else return {...todo, complete: !todo.complete};
        })
        this.setState({todos: newTodos});
    }
    
    renderTodos(){
        return(
            <ul className='TodoList-list'>
                {this.state.todos.map(item => {
                    if(this.state.isEditing === item.id){
                        return(
                            <TodoForm
                                editTodo={this.editTodo}
                                edit={true}
                                val={item.todo}
                            />
                        );
                    } else {
                        return(
                            <Todo
                                key={item.id}
                                todo={item.todo}
                                id={item.id}
                                complete={item.complete}
                                deleteTodo={this.deleteTodo}
                                editTodo={this.enableEdit}
                                toggleComplete={this.toggleComplete}
                            />
                        );
                    }
                })}
            </ul>
        );
    }

    render(){
        localStorage.setItem('TodoItems', JSON.stringify(this.state.todos));
        return(
            <div className='TodoList'>
                <h1 className='TodoList-title'>Todo List</h1>
                <hr/>
                {this.renderTodos()}
                <TodoForm 
                    addTodo={this.addTodo} 
                    edit={false}
                />
            </div>
        )
    }
}

export default TodoList;