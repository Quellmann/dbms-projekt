import { Navigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import Loading from "./Loading";

const ProtectedRoute = ({ children, roles }) => {
	const { user, loading } = useAuth();

	if (loading) {
		return <Loading />;
	}

	if (!user) {
		return <Navigate to="/login" />;
	}

	if (!roles.includes(user.role)) {
		return <Navigate to="/" />;
	}

	return children;
};

export default ProtectedRoute;
