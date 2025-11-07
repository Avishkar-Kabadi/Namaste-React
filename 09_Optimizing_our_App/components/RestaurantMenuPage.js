import React from "react";
import { useParams } from "react-router-dom";


const RestaurantMenuPage = () => {
    const [resMenu, setResMenu] = React.useState([]);
    React.useEffect(() => {
        fetchMenu();
    }, []);

    const { id } = useParams();


    console.log(id);



    const fetchMenu = async () => {
        try {
            const res = await fetch(`
                https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id}/`);

            const data = await res.json();
            console.log(data);
            setResMenu(data?.data);

        } catch (err) {
            console.log("Error fetching menu:", err);
        }
    };


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