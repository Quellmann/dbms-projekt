import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import { useState } from "react";

const Navbar = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-blue-500 p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/">
					<div className="text-white text-lg font-bold">
						School Learning Platform
					</div>
				</Link>
				<div className="block lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex lg:items-center lg:w-auto">
					{!user ? (
						<>
							<Link
								to="/login"
								className="text-white mx-2 hover:underline"
							>
								Login
							</Link>
							<Link
								to="/register"
								className="text-white mx-2 hover:underline"
							>
								Register
							</Link>
						</>
					) : (
						<>
							<Link
								to="/me"
								className="text-white mx-2 hover:underline"
							>
								Profile
							</Link>
							{user?.role === "admin" && (
								<Link
									to="/admin-dashboard"
									className="text-white mx-2 hover:underline"
								>
									Admin Dashboard
								</Link>
							)}
							{user?.role === "teacher" && (
								<Link
									to="/teacher-dashboard"
									className="text-white mx-2 hover:underline"
								>
									Teacher Dashboard
								</Link>
							)}
							<button
								onClick={handleLogout}
								className="text-white mx-2 hover:underline"
							>
								Logout
							</button>
						</>
					)}
				</div>
			</div>
			{/* Dropdown menu for mobile */}
			{isOpen && (
				<div className="bg-blue-500 lg:hidden">
					{!user ? (
						<>
							<Link
								to="/login"
								className="block text-white px-4 py-2 hover:underline"
							>
								Login
							</Link>
							<Link
								to="/register"
								className="block text-white px-4 py-2 hover:underline"
							>
								Register
							</Link>
						</>
					) : (
						<>
							<Link
								to="/me"
								className="block text-white px-4 py-2 hover:underline"
							>
								Profile
							</Link>
							{user?.role === "admin" && (
								<Link
									to="/admin-dashboard"
									className="block text-white px-4 py-2 hover:underline"
								>
									Admin Dashboard
								</Link>
							)}
							{user?.role === "teacher" && (
								<Link
									to="/teacher-dashboard"
									className="block text-white px-4 py-2 hover:underline"
								>
									Teacher Dashboard
								</Link>
							)}
							<button
								onClick={handleLogout}
								className="block w-full text-left text-white px-4 py-2 hover:underline"
							>
								Logout
							</button>
						</>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
