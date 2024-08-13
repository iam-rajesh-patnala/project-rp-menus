import { useNavigate } from "react-router-dom";
import BackIcon from "./BackIcon";
import "./btn-style.css";

const BackToCategories = () => {
	const navigate = useNavigate();

	return (
		<>
			<button
				onClick={() => navigate("/categories")}
				className="back-btn"
			>
				<BackIcon />
				<span className="back-text">Back</span>
			</button>
		</>
	);
};

export default BackToCategories;
