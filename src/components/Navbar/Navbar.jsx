
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import logo from '../../assets/Images/logo.svg';
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



export const Navbar = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img className="logo" src={logo} alt="Logo Modas Chic" />

			<div className="linkHolder">
				<nav ref={navRef} className="responsive_nav">
					<NavLink to="/" onClick={showNavbar}>Home</NavLink>
					<NavLink to="/control-productos" onClick={showNavbar}>Productos</NavLink>
					<NavLink to="" onClick={showNavbar}>Quién somos</NavLink>
					
			<form action="#">
				<label>
					<input className="searchInput"
						type="text"
						id="search"
						placeholder="Search"
					></input>
					<button type="submit" className="searchBtn">Go</button>
				</label>
				
			</form>

				</nav>
				<button type="button" className="loginBtn">Log in</button>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</div>
		</header>
	);
}

export default Navbar;