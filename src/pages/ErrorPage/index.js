import "./style.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="page_404">
			<div className="container">
				<h1 className="heading ">Error 404 </h1>

				<img
					className="img_404"
					src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
					alt="404"
					draggable="false"
					loading="lazy"
					contextMenu="false"
				/>

				<h3 className="h3">Opps! Page not found...</h3>
				<h4 className="h4">
					The page you were looking for doesn't exist.
				</h4>
				<Link to="/" className="link_404">
					Back to Home
				</Link>
			</div>
		</section>
	);
};

export default ErrorPage;
