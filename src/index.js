import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Error from "./pages/Error"
import { createBrowserRouter, RouterProvider } from "react-router";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        // errorElement: <Error />
    }
])

createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />);