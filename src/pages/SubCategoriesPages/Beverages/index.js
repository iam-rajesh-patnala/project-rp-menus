import "./index.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Database
import menuDB from "../../../data/MenuData/menu.json";

// Header Component
import Header from "../../../components/Header";

// Back Button
import BackToCategories from "../../../utils/BackToCategories";

// Menu Card Component
import MenuCard from "../../../components/MenuCard";

// Component for Displaying No Data Message
import NoDataMessage from "../../../components/NoDataMessage";

// Main Beverages Component
const Beverages = () => {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [transitioning, setTransitioning] = useState(false);

	// Extracting beverages data from the JSON data and setting initial state
	useEffect(() => {
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
		setData(beveragesData);
		setFilteredData(beveragesData);
	}, []);

	// Filtering the data based on the selected Radio Button with transition
	const radioButtonOnChange = (event) => {
		setTransitioning(true);
		setTimeout(() => {
			let newData = [];
			if (event.target.value === "cold") {
				newData = data.filter((item) => item.category === "cold");
			} else if (event.target.value === "hot") {
				newData = data.filter((item) => item.category === "hot");
			} else {
				newData = data;
			}
			setFilteredData(newData);
			setTransitioning(false);
		}, 200); // Delay for transition effect
	};

	return (
		<section className="veg-menu-page">
			<Header />

			{/* Radio Buttons Container */}
			<div class="radio-inputs">
				<label htmlFor="all" class="radio">
					<input
						type="radio"
						id="all"
						name="radio"
						value="all"
						defaultChecked
						onChange={radioButtonOnChange}
					/>
					<span class="name all">All</span>
				</label>

				<label htmlFor="cold" class="radio">
					<input
						type="radio"
						id="cold"
						name="radio"
						value="cold"
						onChange={radioButtonOnChange}
					/>
					<span class="name cold">Cold</span>
				</label>

				<label htmlFor="hot" class="radio">
					<input
						type="radio"
						id="hot"
						name="radio"
						value="hot"
						onChange={radioButtonOnChange}
					/>
					<span class="name hot">Hot</span>
				</label>
			</div>
			{filteredData.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					<div
						className={`veg-menu-cards-container ${
							transitioning ? "fade-out" : "fade-in"
						}`}
					>
						{filteredData.map((item) => (
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
