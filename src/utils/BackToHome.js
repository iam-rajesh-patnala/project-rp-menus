import { useNavigate } from "react-router-dom";

const BackToHome = () => {
	const navigate = useNavigate();

	return <button onClick={() => navigate("/")}>Back to Home</button>;
};

export default BackToHome;
