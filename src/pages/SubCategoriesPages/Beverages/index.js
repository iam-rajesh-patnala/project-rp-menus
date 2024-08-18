import "./style.css";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Database
import menuDB from "../../../data/MenuData/menu.json";

//BeveragesDB
import beveragesSearchData from "../../../data/SearchableData/beveragesSearch.json";

// Header Component
import Header from "../../../components/Header";

// Back Button
import BackToCategories from "../../../utils/BackToCategories";

// Menu Card Component
import MenuCard from "../../../components/MenuCard";

// Component for Displaying No Data Message
import NoDataMessage from "../../../components/NoDataMessage";

// Component to display No Search Results
import NoSearchResults from "../../../components/NoSearchResults";

// Item Card
import ItemCard from "../../../components/ItemCard";

// ----------------------------------------------------------------

// Main Beverages Component
const Beverages = () => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [radioFilteredData, setRadioFilteredData] = useState([]);
	const [searchFilteredData, setSearchFilteredData] = useState([]);
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
		setRadioFilteredData(beveragesData);
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
			setRadioFilteredData(newData);
			setTransitioning(false);
		}, 200); // Delay for transition effect
	};

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);

		const newData = query
			? beveragesSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(query)
			)
			: [];
		setSearchFilteredData(newData);
		// console.log(newData);
	};

	return (
		<section className="veg-menu-page">
			<Header data={true} searchHandler={searchHandler} />

			{searchQuery.length > 0 ? (
				<>
					{searchFilteredData.length > 0 ? (
						<div className="items-container">
							{searchFilteredData.map((item) => (
								<ItemCard
									key={item.id}
									item_name={item.item_name}
									price={item.price}
									isAvailable={item.isAvailable}
									viewButtonClick={() =>
										console.log(item.item_name)
									}
									image={item.image}
								/>
							))}
						</div>
					) : (
						<NoSearchResults message={"No search results found"} />
					)}
				</>
			) : data.length > 0 ? (
				<>
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
					{radioFilteredData.length > 0 ? (
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
								{radioFilteredData.map((item) => (
									<MenuCard
										key={item.id || item.name}
										item={item}
									/>
								))}
							</div>
						</>
					) : (
						<NoSearchResults message={"No Filter results found"} />
					)}
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
