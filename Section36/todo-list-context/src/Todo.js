import React, { useContext, memo } from 'react';
import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	ListItemSecondaryAction
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import useToggleState from './Hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/todos.context';

function Todo({ task, completed, id }) {
	const [ isEditing, toggle ] = useToggleState(false);
	const dispatch = useContext(DispatchContext);

	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm initTask={task} toggleEdit={toggle} id={id} />
			) : (
				<>
					<Checkbox
						checked={completed}
						tabIndex={-1}
						onClick={() => dispatch({ type: 'TOGGLE', id: id })}
					/>
					<ListItemText style={{ textDecoration: completed && 'line-through' }}>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton onClick={() => toggle()} aria-label='Edit'>
							<Edit />
						</IconButton>
						<IconButton
							onClick={() => dispatch({ type: 'REMOVE', id: id })}
							aria-label='Delete'
						>
							<Delete />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default memo(Todo);
