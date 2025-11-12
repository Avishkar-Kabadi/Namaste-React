import ReactDOM from "react-dom/client";
import App from "./App";
import appRouter from "./appRouter";
import "./index.css"
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={appRouter}>
        <App />
    </RouterProvider>

);