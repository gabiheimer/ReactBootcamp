import React, { useContext } from 'react';
import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function TodoForm() {
	const [ task, handleChange, resetTask ] = useInputState('');
	const dispatch  = useContext(DispatchContext);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch({ type: 'ADD', task: task });
		resetTask();
	};

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					value={task}
					onChange={handleChange}
					margin='normal'
					label='Add New Todo'
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoForm;
