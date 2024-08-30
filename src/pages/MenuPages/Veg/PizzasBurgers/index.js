import React from "react";
import DisplayData from "../../../../components/DisplayData";

const PizzasBurgers = () => {
	return (
		<DisplayData
			dbCategory={"veg"}
			itemCategory={"Pizzas & Burgers"}
			placeholder={"Ex: Veg Wraps"}
		/>
	);
};

export default PizzasBurgers;
