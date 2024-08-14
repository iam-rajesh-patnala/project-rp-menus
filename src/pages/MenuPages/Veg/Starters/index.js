import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Starters = () => {
	return (
		<div>
			<h1>This is a Starters Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default Starters;
