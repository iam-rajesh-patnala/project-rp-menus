import "./index.css";
import { Link } from "react-router-dom";
import BackToCategories from "../../../utils/BackToCategories";

const Veg = () => {
	return (
		<>
			<div>
				<h1>This is Veg Section</h1>
			</div>
			<div>
				<button>
					<Link to="/categories/veg/soups">Soups</Link>
				</button>

				<button>
					<Link to="/categories/veg/starters">Starters</Link>
				</button>

				<button>
					<Link to="/categories/veg/salads">Salads</Link>
				</button>

				<button>
					<Link to="/categories/veg/naans-breads">
						Naans & Breads
					</Link>
				</button>

				<button>
					<Link to="/categories/veg/curries">Curries</Link>
				</button>

				<button>
					<Link to="/categories/veg/rice">Rice</Link>
				</button>

				<button>
					<Link to="/categories/veg/fired-rice">FiredRice</Link>
				</button>

				<button>
					<Link to="/categories/veg/biryani">Biryani</Link>
				</button>
				<button>
					<Link to="/categories/veg/noodles">Noodles</Link>
				</button>
				<button>
					<Link to="/categories/veg/pizzas-burgers">
						Pizzas & Burgers
					</Link>
				</button>
			</div>

			{/* Back Button To Categories Page */}
			<BackToCategories />
		</>
	);
};

export default Veg;
