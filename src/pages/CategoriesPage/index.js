import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import "./cpmq.css";

// HeaderPage component
import Header from "../../components/Header";

// Loading component
import Loading from "../../components/Loading";

// images
import veg from "../../assets/photos/CategoryPage/veg.webp";
import nonVeg from "../../assets/photos/CategoryPage/non-veg.webp";
import desserts from "../../assets/photos/CategoryPage/desserts.webp";
import beverages from "../../assets/photos/CategoryPage/beverages.webp";

// Default image
import defaultImage from "../../assets/main-default.webp";

const CategoriesPage = () => {
	const [loading, setLoading] = useState(true);
	const [fadeClass, setFadeClass] = useState("fade-out");
	const location = useLocation();

	useEffect(() => {
		setLoading(true);
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 1500); // This should match the duration of pan animation
		return () => clearTimeout(timeoutId);
	}, [location]);

	useEffect(() => {
		if (!loading) {
			setFadeClass("fade-in"); // Set fade-out before the component unmounts
		}
	}, [loading]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<section className={`categories-page ${fadeClass}`}>
					<Header />
					<div className="categories-page-background-container">
						{/* Title Container */}
						<div className="title-container">
							<h1 className="title">Select the Categories</h1>
						</div>

						{/* Cards Container */}
						<div className="categories-container">
							<Link to={"/categories/veg"}>
								<button className="category-btn">
									<img
										src={veg || defaultImage}
										alt="Veg"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">Veg</span>
								</button>
							</Link>
							<Link to={"/categories/non-veg"}>
								<button className="category-btn  non-veg">
									<img
										src={nonVeg || defaultImage}
										alt="Non-Veg"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">
										Non-Veg
									</span>
								</button>
							</Link>
							<Link to={"/categories/desserts"}>
								<button className="category-btn  desserts">
									<img
										src={desserts || defaultImage}
										alt="Desserts"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">
										Desserts
									</span>
								</button>
							</Link>
							<Link to={"/categories/beverages"}>
								<button className="category-btn beverages">
									<img
										src={beverages || defaultImage}
										alt="Beverages"
										className="bg-img"
										loading="lazy"
									/>
									<span className="category-text">
										Beverages
									</span>
								</button>
							</Link>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default CategoriesPage;
