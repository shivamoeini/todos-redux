import React from 'react';
import TodoItem from './TodoItem'
import { useSelector } from "react-redux";

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});
console.log(todos);
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
};

export default TodoList;