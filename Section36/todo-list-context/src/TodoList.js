import React, { useContext } from 'react';
import { Paper, List, Divider } from '@material-ui/core';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
	const todos = useContext(TodosContext);

	if (!todos.length) return null;

	return (
		<Paper>
			<List>
				{todos.map((todo, idx) => (
					<div key={todo.id}>
						<Todo {...todo} />
						{idx < todos.length - 1 && <Divider />}
					</div>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
