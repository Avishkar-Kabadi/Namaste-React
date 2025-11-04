import { Outlet } from "react-router-dom";
import "./app.css";
import Header from "./components/Header";
const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}



export default App;