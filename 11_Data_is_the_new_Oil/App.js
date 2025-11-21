import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import userContext from "./context/userContext";
import Header from "./src/components/Header";
const App = () => {

    const [userName, setUserName] = React.useState()

    React.useEffect(() => {
        const data = {
            name: "Avishkar Kabadi",
        }
        setUserName(data.name);
    }, [])

    return (
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}><div className="app">
            <Header />
            <Outlet />
        </div></userContext.Provider>

    );
}



export default App;