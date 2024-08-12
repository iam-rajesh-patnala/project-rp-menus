import "./style.css";
import "./cpmq.css";
import { Link } from "react-router-dom";

// HeaderPage component
import Header from "../../components/Header";

// images
import veg from "../../assets/photos/Category_Page/veg.webp";
import nonVeg from "../../assets/photos/Category_Page/non-veg.webp";
import desserts from "../../assets/photos/Category_Page/desserts.webp";
import beverages from "../../assets/photos/Category_Page/beverages.webp";

const CategoriesPage = () => {

	return (
		<section className="categories-page">
			<Header />
			<div className="categories-page-background-container">
				<div className="title-container">
					<h1 className="title">Select the Categories</h1>
				</div>

				<div className="categories-container">
					<Link to={"/categories/veg"}>
						<button
							className="category-btn veg"
							style={{ backgroundImage: `url(${veg})` }}
						>
							<span className="category-text">Veg</span>
						</button>
					</Link>
					<Link to={"/categories/non-veg"}>
						<button
							className="category-btn  non-veg"
							style={{ backgroundImage: `url(${nonVeg})` }}
						>
							<span className="category-text">Non-Veg</span>
						</button>
					</Link>
					<Link to={"/categories/desserts"}>
						<button
							className="category-btn  desserts"
							style={{ backgroundImage: `url(${desserts})` }}
						>
							<span className="category-text">Desserts</span>
						</button>
					</Link>
					<Link to={"/categories/beverages"}>
						<button
							className="category-btn beverages"
							style={{ backgroundImage: `url(${beverages})` }}
						>
							<span className="category-text">Beverages</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CategoriesPage;
