import "../styles/index.css";
import App from "../components/welcome/App";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoginOrRegister from "../components/welcome/LoginOrRegister";
import ProtectedRoute from "./ProtectedRoute";
import MainNavigation from "../components/mainNavigation/MainNavigation";
import SecondarySideBar from "../components/secondaryNavigation/SecondarySidebar";
import Review from "../components/review/Review";
import Settings from "../components/settings/Settings";
import Profile from "../components/profile/Profile";
import Learn from "../components/learn/Learn";
import styled from "styled-components";
import LevelsMap from "../components/learn/LevelsMap";

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
				path: "/training-type/:trainingType",
				element: <LevelsMap />,
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
