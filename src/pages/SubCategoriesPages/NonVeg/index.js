import React, { useState, useEffect } from "react";
import "./style.css";
import { v4 as uuid } from "uuid";

//Database
import menuDB from "../../../data/MenuData/menu.json";

//NonVegDB
import nonVegSearchData from "../../../data/SearchableData/nonVegSearch.json";

//Header Component
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

// Main Veg Component
const NonVeg = () => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// Extracting veg data from the JSON data ---------

	useEffect(() => {
		const nonVegData = menuDB.reduce((accumulator, currentItem) => {
			if (currentItem.nonVeg) {
				let data = currentItem.nonVeg.map((item) => ({
					...item,
					id: uuid(),
				}));
				return accumulator.concat(data);
			}
			return accumulator;
		}, []);
		setData(nonVegData);
	}, []);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);

		const newData = query
			? nonVegSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(query)
			  )
			: [];
		setFilteredData(newData);
		// console.log(newData);
	};

	return (
		<section className="veg-menu-page">
			<Header data={true} searchHandler={searchHandler} />

			{/* Checking if data is available else displaying no data message */}
			{searchQuery.length > 0 ? (
				<>
					{filteredData.length > 0 ? (
						<div className="items-container">
							{filteredData.map((item) => (
								<ItemCard
									key={item.id}
									item_name={item.item_name}
									price={item.price}
									isAvailable={item.isAvailable}
									viewButtonClick={() =>
										console.log(item.item_name)
									}
									category={"non-veg"}
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
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					{/* NonVeg Menu Cards */}
					<div className="veg-menu-cards-container">
						{data.map((item) => (
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

export default NonVeg;
