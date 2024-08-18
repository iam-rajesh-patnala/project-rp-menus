import React, { useState, useEffect } from "react";
import "./style.css";
import { v4 as uuid } from "uuid";

//Database
import menuDB from "../../../data/MenuData/menu.json";

//VegDB
import vegSearchData from "../../../data/SearchableData/vegSearch.json";

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
const Veg = () => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	// Extracting veg data from the JSON data ---------

	useEffect(() => {
		const vegData = menuDB.reduce((accumulator, currentItem) => {
			if (currentItem.veg) {
				let data = currentItem.veg.map((item) => ({
					...item,
					id: uuid(),
				}));
				return accumulator.concat(data);
			}
			return accumulator;
		}, []);
		setData(vegData);
	}, []);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);

		const newData = query
			? vegSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(query)
			  )
			: [];
		setFilteredData(newData);
		// console.log(newData);
	};

	// Search Bar Clear Handler
	const clearSearch = () => {
		setSearchQuery("");
		setFilteredData([]);
	};

	return (
		<section className="veg-menu-page">
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={"Ex: Biryani, Chapathi"}
				clearSearch={clearSearch}
			/>

			{/* Checking if Search Data is available else displaying no data message */}

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
									category={"veg"}
									image={item.image}
								/>
							))}
						</div>
					) : (
						<NoSearchResults message={"No Search Results Found"} />
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
					{/* Veg Menu Cards */}
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

export default Veg;
