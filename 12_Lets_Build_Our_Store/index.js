import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import appRouter from "./appRouter";
import "./index.css";
import appStore from "./utils/appStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={appStore}>
        <RouterProvider router={appRouter}>

            <App />

        </RouterProvider>
    </Provider>

);