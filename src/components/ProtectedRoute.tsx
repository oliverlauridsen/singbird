import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
	const auth = true;
	return auth ? children : <Navigate to='welcome' replace />;

	// USE GOOGLE AUTH HERE
	// const auth = useAuth();
	// return auth?.user ? children : <Navigate to='/' replace />;
};

export default ProtectedRoute;
