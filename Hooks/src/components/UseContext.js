import { useState, createContext, useContext } from "react";
const UserContext = createContext();

function Component1() {
	const [user, setUser] = useState("Jesse Hall");

	return (
		<UserContext.Provider value={user}>
			<h3>useContext Hook:</h3>
			<h1>{`Helloooow ${user}!`}</h1>
			<Component2 user={user} />
			<hr></hr>
		</UserContext.Provider>
	);
}

function Component2() {
	return (
		<>
			<h1>Component 2</h1>
			<Component3 />
		</>
	);
}

function Component3() {
	return (
		<>
			<h1>Component 3</h1>
			<Component4 />
		</>
	);
}

function Component4() {
	return (
		<>
			<h1>Component 4</h1>
			<Component5 />
		</>
	);
}

function Component5() {
	const user = useContext(UserContext);

	return (
		<>
			<h1>Component 5</h1>
			<h2>{`Hello ${user} again!`}</h2>
			<FinalParagraph />
		</>
	);
	
	function FinalParagraph(){
		const user = useContext(UserContext);
		
		return(
			<>
			<h1>{`So, i am using the useContext here again : ${user}`}</h1>
			</>
		)
	}
}

export default Component1