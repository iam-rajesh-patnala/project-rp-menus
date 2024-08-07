import { useNavigate } from "react-router-dom";

const BackToCategories = () => {
	const navigate = useNavigate();

	return (
		<button onClick={() => navigate("/categories")}>
			Back to Categories
		</button>
	);
};

export default BackToCategories;
