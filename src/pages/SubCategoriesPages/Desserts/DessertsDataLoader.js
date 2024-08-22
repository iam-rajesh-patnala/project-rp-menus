import menuDB from "../../../data/MenuData/menu.json";
import { v4 as uuid } from "uuid";

const DessertsDataLoader = async () => {
	// Simulate an API call or data fetching logic
	const dessertsData = menuDB.reduce((accumulator, currentItem) => {
		if (currentItem.desserts) {
			let itemsWithId = currentItem.desserts.map((item) => ({
				...item,
				id: uuid(),
			}));
			return [...accumulator, ...itemsWithId];
		}
		return accumulator;
	}, []);
	return dessertsData;
};

export default DessertsDataLoader;
