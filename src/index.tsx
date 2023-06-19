import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./helpers/reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	// <React.StrictMode>
	<RouterProvider router={router} />
	// </React.StrictMode>
);

reportWebVitals();
