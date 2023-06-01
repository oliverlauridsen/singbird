import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./helpers/reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import LoginOrRegister from "./components/LoginOrRegister";
import ProtectedRoute from "./components/ProtectedRoute";
import MainNavigation from "./components/MainNavigation";
import SecondarySideBar from "./components/SecondarySidebar";
import styled from "styled-components";
import Review from "./components/Review";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Learn from "./components/Learn";

const StyledGridBox = styled.section`
	display: grid;
	grid-template-columns: 15% 65% 20%;
	min-height: 100vh;
`;

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
