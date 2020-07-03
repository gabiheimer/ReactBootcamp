import React from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    if(!todos.length) return null;
    
    return (
        <Paper>
            <List>
                {todos.map((todo, idx) => (
                    <div key = {todo.id}>
                        <Todo
                            {... todo}
                            removeTodo = {removeTodo}
                            toggleTodo = {toggleTodo}
                            editTodo = {editTodo}
                        />
                        {(idx < todos.length-1) && <Divider/>}
                    </div>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;