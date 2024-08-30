import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { ScrollRestoration } from "react-router-dom";
import { v4 as uuid } from "uuid";

// Components
import Header from "../../components/Header";
import BackButton from "../BackButton";
import ItemCard from "../../components/ItemCard";
import FloatingMenuButton from "../../components/FloatingMenuButton";
import ItemListModel from "../../components/ItemListModel";
import NoDataMessage from "../../components/NoDataMessage";
import NoSearchResults from "../../components/NoSearchResults";
import BottomSheet from "../BottomSheet";
import Spinner from "../Spinner";

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

let itemsCountData = {};

const DisplayData = ({ dbCategory, itemCategory, placeholder }) => {
	const [data, setData] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isModalOpen, setModalOpen] = useState(false);
	const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false); // State to manage the bottom sheet visibility
	const [selectedItem, setSelectedItem] = useState(null);

	// Refs for modal and bottom sheet content
	const modalRef = useRef(null);
	const bottomSheetRef = useRef(null);

	// To get count of items
	const getCountData = (currentItem) => {
		// If the current item is an object with more than 1 property
		if (Object.getOwnPropertyNames(currentItem).length > 1) {
			Object.keys(currentItem).forEach((key) => {
				itemsCountData[key] = currentItem[key].length;
			});
		}

		// If the current item is an object with 1 property
		let [key] = Object.keys(currentItem);
		let value = Object.values(currentItem)[0].length;
		itemsCountData[key] = value;
	};

	useEffect(() => {
		// Fetching The data
		const fetchedData = dbMap[dbCategory];

		// Filtering the data
		const filteredData = fetchedData[dbCategory].reduce(
			(accumulator, currentItem) => {
				getCountData(currentItem);

				// 	("Current Item:", currentItem);

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

	//-------------------Scroll Restoration-------------------
	useEffect(() => {
		// Scroll to top when search query changes or the component mounts
		window.scrollTo(0, 0);
	}, [searchQuery]);

	// Filtering the data using Search Handler
	const searchHandler = (event) => {
		const query = event.target.value.toLowerCase().trim();
		setSearchQuery(query);
	};

	//------------------------------------------------Menu Button------------------------------------------------

	// Floating Menu Button Click handler
	const handleMenuClick = () => {
		setModalOpen(true);
		document.body.style.overflow = "hidden"; // Disable scrolling on body when modal is open
	};

	// Close modal
	const closeModal = () => {
		setModalOpen(false);
		document.body.style.overflow = "auto"; // Enable scrolling on body when modal is closed
	};

	// Close modal when clicking outside of it
	const handleBackgroundClick = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			closeModal();
		}
	};

	//------------------------------------------------View Button------------------------------------------------
	// View Button Click handler
	const handleViewClick = (item) => {
		setIsBottomSheetVisible(true); // Open the bottom sheet
		document.body.style.overflow = "hidden"; // Disable scrolling on body when modal is open
		setSelectedItem(item);
		// console.log(item);
	};

	const handleCloseClick = () => {
		setIsBottomSheetVisible(false); // Close the bottom sheet
		document.body.style.overflow = "auto"; // Enable scrolling on body when modal is closed
	};

	// Close bottom sheet when clicking outside of it
	const handleBottomSheetBackgroundClick = (event) => {
		if (
			bottomSheetRef.current &&
			!bottomSheetRef.current.contains(event.target)
		) {
			handleCloseClick();
		}
		/* console.log("Bottom sheet background clicked"); */
	};

	// Filtering the data using Search Handler
	const filteredData = searchQuery
		? data.filter((item) =>
				item.item_name.toLowerCase().includes(searchQuery)
		  )
		: data;

	return (
		<section
			className="page-background-container"
			onClick={handleBackgroundClick} // Add click handler to background for modal
		>
			{/* Automatic Scroll Restoration. */}
			<ScrollRestoration />
			<Header
				data={true}
				searchHandler={searchHandler}
				placeholder={placeholder || "Search for food items..."}
				className={"items-container"}
			/>

			{/* Checking if data is available else displaying no data message */}
			{isLoading ? (
				<Spinner />
			) : filteredData.length > 0 ? (
				<>
					{!searchQuery && (
						<div className="title-container">
							<h1 className="title">{`Choose Your ${itemCategory}`}</h1>
							<div className="back-btn-container">
								<BackButton
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
								customizable={item.customizable || false}
								handleViewClick={() => handleViewClick(item)}
							/>
						))}
					</div>

					{/* Conditionally render BottomSheet */}
					{isBottomSheetVisible && (
						<div
							className="bottom-sheet-bg-container-open"
							onClick={handleBottomSheetBackgroundClick}
						>
							<BottomSheet
								isVisible={isBottomSheetVisible}
								onClose={handleCloseClick}
								content={selectedItem}
								itemCategory={itemCategory}
								ref={bottomSheetRef}
							/>
						</div>
					)}
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
				<div
					className={
						isModalOpen
							? "floating-menu-open"
							: "floating-menu-container"
					}
				>
					{!isModalOpen ? (
						<FloatingMenuButton onClick={handleMenuClick} />
					) : (
						<ItemListModel
							ref={modalRef} // Attach ref to modal content
							closeModal={closeModal}
							dataCategory={dbCategory}
							currentCategory={itemCategory}
							itemsCountData={itemsCountData}
						/>
					)}
				</div>
			)}
		</section>
	);
};

export default DisplayData;
