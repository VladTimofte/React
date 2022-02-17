import React, { useState } from "react";

function FavoriteColor() {
	const [color, setColor] = useState("red");

	return (
		<>
			<h3>useState Hook: </h3>
			<h1>My favorite color is {color}!</h1>
			<button
				type="button"
				onClick={() => setColor("blue")}
			>Blue</button>
			<button
				type="button"
				onClick={() => setColor("red")}
			>Red</button>
			<button
				type="button"
				onClick={() => setColor("pink")}
			>Pink</button>
			<button
				type="button"
				onClick={() => setColor("green")}
			>Green</button>
			<hr></hr>
		</>
	);
}

export default FavoriteColor