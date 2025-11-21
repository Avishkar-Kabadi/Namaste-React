import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./src/components/About";
import Body from "./src/components/Body";
import ContactUs from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";
// import Grocery from "./components/Grocery";
import Cart from "./src/components/Cart";
import Login from "./src/components/Login";
import RestaurantMenuPage from "./src/components/RestaurantMenuPage";
import ProtectedApp from "./src/ProtectedApp";
import Register from "./src/components/Register";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On demand loading


const Grocery = lazy(() => import("./src/components/Grocery"))



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedApp />, 
        children: [
            {
                path: "/",
                element: <App />, // This contains your Header + Outlet
                children: [
                    { path: "/", element: <Body /> },
                    { path: "/about", element: <About /> },
                    { path: "/contact", element: <ContactUs /> },
                    { path: "/restaurants/:id", element: <RestaurantMenuPage /> },
                    { path: "/cart", element: <Cart /> },
                    {
                        path: "/grocery",
                        element: (
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <Grocery />
                            </Suspense>
                        ),
                    },
                ],
            },
        ],
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />, // Accessible even if not logged in
    },
    {
        path: "/register",
        element: <Register />, // Accessible even if not logged in
    },
]);


export default appRouter; 