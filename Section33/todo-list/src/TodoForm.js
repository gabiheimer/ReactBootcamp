import React from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';

function TodoForm({ addTodo }) {
    const [ task, handleChange, resetTask ] = useInputState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(task);
        resetTask();
    }

    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={handleSubmit}>
                <TextField
                    value = {task}
                    onChange = {handleChange}
                    margin = 'normal'
                    label = 'Add New Todo'
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;