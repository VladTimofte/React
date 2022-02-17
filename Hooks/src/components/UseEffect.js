import { useState, useEffect } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	const [calculation, setCalculation] = useState(0);

	useEffect(() => {
		setCalculation(() => count * 2);
	}, [count]); // <- add the count variable here

	return (
		<>
			<h3>useEffect hook:</h3>
			<h1>Count: {count}</h1>
			<button onClick={() => setCount((c) => c + 1)}>+</button>
			<h1>Calculation: {calculation}</h1>
			<hr></hr>
		</>
	);
}

export default Counter