import menuDB from "../../../data/MenuData/menu.json";
import { v4 as uuid } from "uuid";

const BeveragesDataLoader = async () => {
	// Simulate an API call or data fetching logic
	const beveragesData = menuDB.reduce((accumulator, currentItem) => {
		if (currentItem.beverages) {
			let itemsWithId = currentItem.beverages.map((item) => ({
				...item,
				id: uuid(),
			}));
			return [...accumulator, ...itemsWithId];
		}
		return accumulator;
	}, []);
	return beveragesData;
};

export default BeveragesDataLoader;
