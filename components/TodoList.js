import React from 'react';
import TodoItem from './TodoItem'
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
const TodoList = () => {
	const todos = useSelector((state) => {
		return state.tasks;
	});
	console.log(todos);
	return (
		<Container component="main" maxWidth="xs">
			<Box>
				<ul>
				{todos.map((todo) => (
					<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
				))}
			</ul>
			</Box>
		</Container>

	);
};

export default TodoList;