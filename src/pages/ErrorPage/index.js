import "./style.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<section className="page_404">
			<div className="container">
				<div className="four_zero_four_bg">
					<h1 className="text-center ">Error 404 </h1>
				</div>

				<div className="content_box_404">
					<h3 className="h2">Opps! Page not found...</h3>
					<h4>The page you were looking for doesn't exist.</h4>
					<Link to="/" className="link_404">
						Go to Home
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
