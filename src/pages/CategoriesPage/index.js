import "./style.css";
import "./cpmq.css";
import { Link } from "react-router-dom";

// HeaderPage component
import Header from "../../components/Header";

// images
import veg from "../../assets/photos/CategoryPage/veg.webp";
import nonVeg from "../../assets/photos/CategoryPage/non-veg.webp";
import desserts from "../../assets/photos/CategoryPage/desserts.webp";
import beverages from "../../assets/photos/CategoryPage/beverages.webp";

const CategoriesPage = () => {
	return (
		<section className="categories-page">
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
								src={veg}
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
								src={nonVeg}
								alt="Non-Veg"
								className="bg-img"
								loading="lazy"
							/>
							<span className="category-text">Non-Veg</span>
						</button>
					</Link>
					<Link to={"/categories/desserts"}>
						<button className="category-btn  desserts">
							<img
								src={desserts}
								alt="Desserts"
								className="bg-img"
								loading="lazy"
							/>
							<span className="category-text">Desserts</span>
						</button>
					</Link>
					<Link to={"/categories/beverages"}>
						<button className="category-btn beverages">
							<img
								src={beverages}
								alt="Beverages"
								className="bg-img"
								loading="lazy"
							/>
							<span className="category-text">Beverages</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CategoriesPage;
