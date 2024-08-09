import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./style.css";
import logo from "../../assets/icons/logo.png";

const Header = () => {
	return (
		<>		
		<header className="header">
			<Link to="/" className="logo-link">
				<img alt="logo" src={logo} className="logo" />
			</Link>
			<h1 className="restaurant-name">ABC Multicuisine Restaurant</h1>
		</header>

		<Outlet />
		</>
	);
};

export default Header;
