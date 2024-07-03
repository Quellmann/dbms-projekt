import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const AnonymousRoute = ({ children }) => {
	const { user } = useAuth();

	return user ? <Navigate to="/" /> : children;
};

export default AnonymousRoute;
