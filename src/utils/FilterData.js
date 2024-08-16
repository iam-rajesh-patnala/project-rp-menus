// Generates Unique ID
import { v4 as uuid } from "uuid";

// Data Base
import vegDB from "../data/ItemData/veg.json";
import nonVegDB from "../data/ItemData/non-veg.json";
import dessertsDB from "../data/ItemData/desserts.json";
import beveragesDB from "../data/ItemData/beverages.json";

const FilterData = ({ dbCategory, itemCategory }) => {
	// Javascript code Goes here
	const db = {
		veg: vegDB,
		"non-veg": nonVegDB,
		desserts: dessertsDB,
		beverages: beveragesDB,
	};

	// Fetching The data
	const fetchedData = db[dbCategory];

	// Filtering the data
	const filterData = fetchedData[dbCategory].reduce(
		(accumulator, currentItem) => {
			// Check if the current item has a "db.category" property
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

	return { filterData };
};

export default FilterData;
