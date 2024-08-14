import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";
import { v4 as uuid } from "uuid";

//Data Source
import DataBase from "../../../../data/ItemData/veg.json";

// Component to display list of soups
import ItemCard from "../../../../components/ItemCard";


const Soups = () => {
	// Extracting soups from the JSON data
	const soups = DataBase.veg.reduce((accumulator, currentItem) => {
		// Check if the current item has a "Soups" property
		if (currentItem.Soups) {
			let data = currentItem.Soups.map((item) => ({
				...item,
				id: uuid(),
			}));
			return accumulator.concat(data);
		}
		// Otherwise, return the accumulator unchanged
		return accumulator;
	}, []);

	// View Button Click ----------------------------------------------------------------

	const viewButtonClick = (e) => {
        e.preventDefault();
        console.log("View button clicked for Soups");
    };

	return (
		<div>
			<h1>This is Soups Page</h1>

			{soups.map((soup) => (
				<ItemCard
					key={soup.id}
					item_name={soup.item_name}
					price={soup.price}
					isAvailable={soup.isAvailable}
					image={soup.image}
					viewButtonClick={viewButtonClick}
				/>
			))}

			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};
export default Soups;
