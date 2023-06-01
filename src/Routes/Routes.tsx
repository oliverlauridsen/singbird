import "../styles/index.css";
import App from "../components/Welcome/App";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoginOrRegister from "../components/Welcome/LoginOrRegister";
import ProtectedRoute from "./ProtectedRoute";
import MainNavigation from "../components/Navigation/MainNavigation";
import SecondarySideBar from "../components/Navigation/SecondarySidebar";
import Review from "../components/Review/Review";
import Settings from "../components/Settings/Settings";
import Profile from "../components/Profile/Profile";
import Learn from "../components/Learn/Learn";
import styled from "styled-components";

const StyledGridBox = styled.section`
	display: grid;
	grid-template-columns: 15% 65% 20%;
	min-height: 100vh;
`;

export const router = createBrowserRouter([
	{
		path: "welcome",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "start",
		element: <LoginOrRegister />,
	},
	{
		path: "login",
		element: <div>login</div>,
	},
	{
		path: "register",
		element: <div>register </div>,
	},
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<StyledGridBox>
					<MainNavigation />
					<Outlet />
					<SecondarySideBar />
				</StyledGridBox>
			</ProtectedRoute>
		),
		children: [
			{
				path: "/",
				element: <Learn />,
			},

			{
				path: "settings",
				element: <Settings />,
			},
			{
				path: "review",
				element: <Review />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
		],
	},
]);
