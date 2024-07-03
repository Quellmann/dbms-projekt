import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const ProtectedRoute = ({ children, roles }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to="/login" />;
	}

	if (!roles.includes(user.role)) {
		return <Navigate to="/" />;
	}

	return children;
};

export default ProtectedRoute;
