import { Link, Route, Routes } from "react-router-dom";
import Test from "../components/Test";

const Welcome = () => {
	return (
		<section>
			<h1>The Welcome Page!</h1>

			<Link to="/welcome/new-user">Click Here To CHeck If It's Working</Link>

			<Routes>
				<Route path=":new-user" element={<Test />}>
				</Route>
			</Routes>
		</section>
	)
};

export default Welcome;