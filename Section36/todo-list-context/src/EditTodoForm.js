import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext } from './contexts/todos.context';

function EditTodoForm({ initTask, id, toggleEdit }) {
	const [ task, handleChange ] = useInputState(initTask);
	const dispatch  = useContext(DispatchContext);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		dispatch({ type: 'EDIT', id: id, newTask: task });
		toggleEdit();
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				marginLeft: '1rem',
				width: '100%'
			}}
		>
			<TextField value={task} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
}

export default EditTodoForm;
