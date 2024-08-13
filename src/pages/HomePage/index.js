import "./index.css";
import "./hpmq.css";
import OrderNowBtn from "../../components/OrderNowBtn";
import logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
	const year = new Date().getFullYear();

	return (
		<section className="home-page">
			<div className="home-page-background-container">
				{/* Logo Container */}
				<div className="logo-container">
					<img alt="logo" src={logo} className="restaurant-logo" />
				</div>

				{/* Text Container */}
				<div className="text-container">
					<h1 className="welcome-text">
						Welcome to
						<br /> ABC Multicuisine Restaurant
					</h1>
					<p className="sub-text">
						Discover our delicious and exquisite dishes.
					</p>
				</div>

				{/* Button - Container */}
				<div className="button-container">
					<Link to="/categories" className="link">
						<OrderNowBtn />
					</Link>
				</div>

				<p className="copyright">
					&copy; {year} abc, Inc. All rights reserved
				</p>
			</div>
		</section>
	);
};

export default HomePage;
