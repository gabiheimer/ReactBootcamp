import React from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, ListItemSecondaryAction } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import useToggleState from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

function Todo({ task, completed, id, removeTodo, toggleTodo, editTodo }) {
    const [ isEditing, toggle ] = useToggleState(false);

    return (
        <ListItem style={{height: '64px'}}>
            {isEditing 
                ? <EditTodoForm 
                    initTask = {task}
                    editTodo = {editTodo}
                    toggleEdit = {toggle}
                    id = {id}
                />
                : <>
                    <Checkbox
                        checked = {completed}
                        tabIndex = {-1}
                        onClick = {() => toggleTodo(id)}
                    />
                    <ListItemText style={{textDecoration: completed && 'line-through'}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => toggle()} aria-label='Edit'>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => removeTodo(id)} aria-label='Delete'>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </> 
            }
        </ListItem>
    );
}

export default Todo;