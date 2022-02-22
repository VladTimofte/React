import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css'

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink to='/welcome'
							style={({ isActive }) => ({ color: isActive ? '#000000' : '#95bcf0' })}
						>Welcome</NavLink>
					</li>
					<li>
						<NavLink to='/products'
							style={({ isActive }) => ({ color: isActive ? '#000000' : '#95bcf0' })}
						>Products</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainHeader;