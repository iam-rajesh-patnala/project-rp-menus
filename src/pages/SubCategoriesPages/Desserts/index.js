import "./style.css";
import React, { useState, useEffect, useMemo } from "react";
import { useLoaderData } from "react-router-dom";

// Importing Data
import dessertsSearchData from "../../../data/SearchableData/dessertsSearch.json";

// Importing Components
import Header from "../../../components/Header";
import BackToCategories from "../../../utils/BackToCategories";
import MenuCard from "../../../components/MenuCard";
import NoDataMessage from "../../../components/NoDataMessage";
import NoSearchResults from "../../../components/NoSearchResults";
import ItemCard from "../../../components/ItemCard";

// ----------------------------------------------------------------
// Main Desserts Component
const Desserts = () => {
	const rawDessertsData = useLoaderData(); // Access the pre-fetched data using useLoaderData
	const [dessertsData, setDessertsData] = useState(rawDessertsData || []);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		if (rawDessertsData?.length) {
			setDessertsData(rawDessertsData);
		}
	}, [rawDessertsData]);

	// Filtering the data using Search Handler
	const filteredData = useMemo(() => {
		const data = searchQuery
			? dessertsSearchData.filter((item) =>
					item.item_name.toLowerCase().includes(searchQuery)
			  )
			: dessertsData;

		return data;
	}, [searchQuery, dessertsData]);

	// Search Query Handler
	const searchHandler = (event) => {
		setSearchQuery(event.target.value.toLowerCase().trim());
	};

	// Clear Search
	const clearSearch = () => {
		setSearchQuery("");
	};

	// Rendering the Items
	const renderItems = (items) =>
		items.map((item) => (
			<ItemCard
				key={item.id}
				item_name={item.item_name}
				price={item.price}
				isAvailable={item.isAvailable}
				viewButtonClick={() => console.log(item.item_name)}
				category={item.category}
				imagePath={item.imagePath}
			/>
		));

	return (
		<section className="veg-menu-page">
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={"Ex: Brownie, Kulfi"}
				clearSearch={clearSearch}
			/>

			{/* Checking if data is available else displaying no data message */}

			{searchQuery ? (
				filteredData.length > 0 ? (
					<div className="items-container">
						{renderItems(filteredData)}
					</div>
				) : (
					<NoSearchResults
						message={"No Search Results Found"}
						searchHandler={searchHandler}
					/>
				)
			) : dessertsData.length > 0 ? (
				<>
					<div className="title-container">
						<h1 className="title">Choose Your Menu</h1>
						<div className="back-btn-container">
							<BackToCategories />
						</div>
					</div>
					<div className="veg-menu-cards-container">
						{dessertsData.map((item) => (
							<MenuCard key={item.id} item={item} />
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

export default Desserts;
