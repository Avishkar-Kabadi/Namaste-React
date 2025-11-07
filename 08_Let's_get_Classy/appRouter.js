import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import Login from "./components/Login";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenuPage />
            }

        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <Login />
    }

]);


export default appRouter; 