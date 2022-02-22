import {
	Routes,
	Route,
	Navigate,
	Link
} from "react-router-dom"

const Test = () => {
	return(
		<div>
			<h3>This is a test, which means it's working!</h3>
			<Link to="/delete">Now if you wanna go back or delete this element, click HERE!</Link>
		</div>
	)
}

export default Test;