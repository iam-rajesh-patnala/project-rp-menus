import React from "react";
import BackToMenu from "../../../../utils/BackToMenu";

const Curries = () => {
	return (
		<div>
			<h1>This is Curries Page</h1>
			<BackToMenu viewUrl={"/categories/veg"} />
		</div>
	);
};

export default Curries;
