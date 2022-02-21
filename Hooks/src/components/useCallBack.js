import { useState, useCallback } from "react";
import Todos from "./useCallBackHelper/Todos";

const TodoList = () => {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, "New Todo"]);
	}, [todos]);

	return (
		<>
		<h3>useCallBack hook:</h3>
			<Todos todos={todos} addTodo={addTodo} />
			<div>
				Count: {count}
				<br />
				<button onClick={increment}>+</button>
			</div>
			<hr />
		</>
	);
};

export default TodoList;