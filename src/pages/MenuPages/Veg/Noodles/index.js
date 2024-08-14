import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Noodles = () => {
	return (
		<div>
			<h1>This is Noodles Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default Noodles;
