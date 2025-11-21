import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import userContext from "./context/userContext";
import Header from "./src/components/Header";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    

    const user = useSelector((store) => store.user.user);


    const [userName, setUserName] = React.useState(user)


    return (
        <userContext.Provider value={{ loggedInUser: userName, setUserName }}><div className="app">
            <Header />
            <Outlet />
        </div></userContext.Provider>

    );
}



export default App;