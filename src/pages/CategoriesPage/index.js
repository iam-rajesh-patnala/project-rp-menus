import "./style.css";
import "./cpmq.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

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
						<button className="category-btn veg">
							<span className="category-text">Veg</span>
						</button>
					</Link>
					<Link to={"/categories/non-veg"}>
						<button className="category-btn  non-veg">
							<span className="category-text">Non-Veg</span>
						</button>
					</Link>
					<Link to={"/categories/desserts"}>
						<button className="category-btn  desserts">
							<span className="category-text">Desserts</span>
						</button>
					</Link>
					<Link to={"/categories/beverages"}>
						<button className="category-btn beverages">
							<span className="category-text">Beverages</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default CategoriesPage;
