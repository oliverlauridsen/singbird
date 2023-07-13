import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const auth = getAuth();

	// Sometimes at reload it will go back to welcome screen (we need to persist this state somehow, maybe localStorage)
	return auth?.currentUser ? children : <Navigate to='/welcome' replace />;
};

export default ProtectedRoute;
