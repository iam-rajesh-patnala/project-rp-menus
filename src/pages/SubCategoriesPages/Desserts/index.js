import "./index.css";
import GoBack from "../../../utils/BackToCategories";
import { useLoaderData } from "react-router-dom";

const Desserts = () => {
	const data = useLoaderData();
	console.log(data);
	return (
		<>
			<div>
				<h1>This is Desserts Page</h1>
			</div>

			<GoBack />
		</>
	);
};

export default Desserts;
