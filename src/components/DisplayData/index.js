import "./style.css";
import React, { useState, useEffect } from "react";
import { ScrollRestoration } from "react-router-dom";
import { v4 as uuid } from "uuid";

// Components
import Header from "../../components/Header";
import BackToMenu from "../../utils/BackToMenu";
import ItemCard from "../../components/ItemCard";
import FloatingMenuButton from "../../components/FloatingMenuButton";
import ItemListModel from "../../components/ItemListModel";
import NoDataMessage from "../../components/NoDataMessage";
import NoSearchResults from "../../components/NoSearchResults";

// Data Base
import vegDB from "../../data/ItemData/veg.json";
import nonVegDB from "../../data/ItemData/nonVeg.json";
import dessertsDB from "../../data/ItemData/desserts.json";
import beveragesDB from "../../data/ItemData/beverages.json";

const dbMap = {
	veg: vegDB,
	nonVeg: nonVegDB,
	desserts: dessertsDB,
	beverages: beveragesDB,
};

const DisplayData = ({ dbCategory, itemCategory, placeholder }) => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		// Fetching The data
		const fetchedData = dbMap[dbCategory];

		console.log(fetchedData);
		// Filtering the data
		const filteredData = fetchedData[dbCategory].reduce(
			(accumulator, currentItem) => {
				// Check if the current item has a "itemCategory" property
				if (currentItem[itemCategory]) {
					let data = currentItem[itemCategory].map((item) => ({
						...item,
						id: uuid(),
					}));
					return accumulator.concat(data);
				}
				// Otherwise, return the accumulator unchanged
				return accumulator;
			},
			[]
		);

		setData(filteredData);
		setIsLoading(false);
	}, [dbCategory, itemCategory]);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);
	};

	// Floating Menu Button Click handler
	const handleMenuClick = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	// Close modal when clicking outside of it
	const handleBlur = (event) => {
	};

	// Filtering the data using Search Handler
	const filteredData = searchQuery
		? data.filter((item) =>
				item.item_name.toLowerCase().includes(searchQuery)
		  )
		: data;

	return (
		<section
			className={`page-background-container ${
				isModalOpen ? "dim-background" : ""
			}`}
		>
			{/* Automatic Scroll Restoration. */}
			<ScrollRestoration />
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={placeholder || "Search for food items..."}
			/>

			{/* Checking if data is available else displaying no data message */}
			{isLoading ? (
				<h1>Loading...</h1>
			) : filteredData.length > 0 ? (
				<>
					{!searchQuery && (
						<div className="title-container">
							<h1 className="title">{`Choose Your ${itemCategory}`}</h1>
							<div className="back-btn-container">
								<BackToMenu
									viewUrl={`/categories/${dbCategory}`}
								/>
							</div>
						</div>
					)}

					<div className="items-container">
						{filteredData.map((item) => (
							<ItemCard
								key={item.id}
								item_name={item.item_name}
								price={item.price}
								isAvailable={item.isAvailable}
								imagePath={item.imagePath}
								category={item.category}
								viewButtonClick={() =>
									console.log(
										`View button clicked for ${item.item_name}`
									)
								}
							/>
						))}
					</div>
				</>
			) : searchQuery ? (
				<NoSearchResults
					message="No Search Results Found"
					searchHandler={searchHandler}
				/>
			) : (
				// Ensure that this only appears when there is truly no data available
				<NoDataMessage
					message={`No ${itemCategory} Found`}
					backTo="Menu"
					backUrlPath={`/categories/${dbCategory}`}
				/>
			)}

			{/* Floating Menu Button */}
			{data.length > 0 && searchQuery.length === 0 && (
				<div className="floating-menu-container">
					{!isModalOpen ? (
						<FloatingMenuButton onClick={handleMenuClick} />
					) : (
						<ItemListModel
							onBlur={handleBlur}
							closeModal={closeModal}
							dataCategory={dbCategory}
							currentCategory={itemCategory}
						/>
					)}
				</div>
			)}
		</section>
	);
};

export default DisplayData;
