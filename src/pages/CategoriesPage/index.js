import "./style.css";
import { Link } from "react-router-dom";
import BackToHome from "../../utils/BackToHome";

const CategoriesPage = () => {
	return (
		<>
			<div>
				<h1>Categories Page</h1>
			</div>
			<button>
				<Link to={"/categories/veg"}>Veg</Link>
			</button>
			<button>
				<Link to={"/categories/non-veg"}>Non-Veg</Link>
			</button>
			<button>
				<Link to={"/categories/desserts"}>Desserts</Link>
			</button>
			<button>
				<Link to={"/categories/beverages"}>Beverages</Link>
			</button>

			{/* Back Button To Home Page */}
			<BackToHome />
		</>
	);
};

export default CategoriesPage;
