import menuDB from "../../../data/MenuData/menu.json";
import { v4 as uuid } from "uuid";

const NonVegDataLoader = async () => {
	// Simulate an API call or data fetching logic
	const nonVegData = menuDB.reduce((accumulator, currentItem) => {
		if (currentItem.nonVeg) {
			let itemsWithId = currentItem.nonVeg.map((item) => ({
				...item,
				id: uuid(),
			}));
			return [...accumulator, ...itemsWithId];
		}
		return accumulator;
	}, []);
	return nonVegData;
};

export default NonVegDataLoader;
