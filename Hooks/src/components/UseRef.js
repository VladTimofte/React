import { useState, useEffect, useRef } from "react";
import '../styles/style.css'

function Ref() {
	const [inputValue, setInputValue] = useState("");
	const count = useRef(0);
	const [inputValue1, setInputValue1] = useState("");
	const previousInputValue1 = useRef("");

	useEffect(() => {
		previousInputValue1.current = inputValue1;
	}, [inputValue1]);

	useEffect(() => {
		count.current = count.current + 1;
	});

	return (
		<div className="BkgColor">
			<h3>useRef hook:</h3>
			<input
				type="text"
				placeholder="Type in..."
				value={inputValue, inputValue1}
				onChange={(e) => setInputValue(e.target.value) & setInputValue1(e.target.value)}
			/>
			<h2>Current Value: {inputValue1}</h2>
			<h2>Previous Value: {previousInputValue1.current}</h2>
			<h1>Render Count: {count.current}</h1>
			<hr></hr>
		</div>
	);
}

export default Ref

/*
Try typing in the input field, and you will
see the application render conut increase.
*/
