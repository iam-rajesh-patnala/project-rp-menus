import "./index.css";
import { v4 as uuid } from "uuid";

//Database
import menuDB from "../../../data/MenuData/menu.json";

//Header Component
import Header from "../../../components/Header";

// Back Button
import BackToCategories from "../../../utils/BackToCategories";

// Menu Card Component
import MenuCard from "../../../components/MenuCard";

// Component for Displaying No Data Message
import NoDataMessage from "../../../components/NoDataMessage";

// ----------------------------------------------------------------

// Main Veg Component
const Beverages = () => {
	// Easy way to fetch the data ---------

	// const beveragesData =
	// 	menuDB[0]?.beverages.map((item) => ({
	// 		...item,
	// 		id: uuid(),
	// 	})) || []; // Optional chaining to prevent errors

	// Extracting veg data from the JSON data ---------
	const beveragesData = menuDB.reduce((accumulator, currentItem) => {
		if (currentItem.beverages) {
			let data = currentItem.beverages.map((item) => ({
				...item,
				id: uuid(),
			}));
			return accumulator.concat(data);
		}
		return accumulator;
	}, []);

	return (
		<section className="veg-menu-page">
			<Header />
			{/* Checking if data is available else displaying no data message */}
			{beveragesData.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					{/* Veg Menu Cards */}
					<div className="veg-menu-cards-container">
						{beveragesData.map((item) => (
							<MenuCard key={item.id || item.name} item={item} />
						))}
					</div>
				</>
			) : (
				<NoDataMessage
					backTo={"Categories"}
					backUrlPath={"/categories"}
				/>
			)}
		</section>
	);
};

export default Beverages;
