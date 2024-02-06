import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css'

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <span>home</span>,
		},
		{
			path: "/products/:id",
			element: <span>category</span>,
		},
		{
			path: "/product/:id",
			element: <span>product</span>,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
