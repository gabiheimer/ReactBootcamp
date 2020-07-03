import React from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';

function EditTodoForm({ initTask, editTodo, id, toggleEdit }) {
    const [ task, handleChange ] = useInputState(initTask);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        editTodo(id, task);
        toggleEdit();
    }

    return (
        <form 
            onSubmit={handleSubmit}
            style={{
                marginLeft: '1rem',
                width: '100%'
            }}
        >
            <TextField
                value={task}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>

    );
}

export default EditTodoForm;