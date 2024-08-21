import menuDB from "../../../data/MenuData/menu.json";
import { v4 as uuid } from "uuid";

const VegDataLoader = async () => {
	// Simulate an API call or data fetching logic
	const vegData = menuDB.reduce((acc, currentItem) => {
		if (currentItem.veg) {
			let itemsWithId = currentItem.veg.map((item) => ({
				...item,
				id: uuid(),
			}));
			return [...acc, ...itemsWithId];
		}
		return acc;
	}, []);

	return vegData;
};

export default VegDataLoader;
