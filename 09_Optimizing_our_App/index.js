import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import appRouter from "./appRouter";
import "./index.css";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} >
        <App />
    </RouterProvider>

);