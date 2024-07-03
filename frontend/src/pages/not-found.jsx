import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded shadow-md text-center">
				<h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
				<h2 className="text-2xl font-semibold mb-6 text-gray-700">
					Page Not Found
				</h2>
				<p className="mb-6 text-gray-600">
					Sorry, the page you're looking for doesn't exist.
				</p>
				<Link
					to="/"
					className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
				>
					Go to Homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
