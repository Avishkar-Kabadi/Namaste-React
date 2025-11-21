import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedApp = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }



    return <Outlet />;
};



export default ProtectedApp;
