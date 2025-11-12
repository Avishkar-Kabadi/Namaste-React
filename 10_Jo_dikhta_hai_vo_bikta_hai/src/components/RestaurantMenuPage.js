import React from "react";
import { useParams } from "react-router-dom";
import useFetchMenu from "../../utils/useFetchMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";


const RestaurantMenuPage = () => {
    React.useEffect(() => {
    }, []);

    const { id } = useParams();
    const resData = useFetchMenu(id);


    console.log(resData);
    const isOnline = useOnlineStatus();


    if (isOnline) console.log("You're connected to internet");
    else console.log("You are offline");




    return (<div className="menu">
        <h1>Name of Restaurant</h1>
        <h2>Menu</h2>
        <ul>
            <li>Biryani</li>
            <li>Burgers</li>
            <li>Diet Coke</li>
        </ul>
    </div>)

}

export default RestaurantMenuPage;