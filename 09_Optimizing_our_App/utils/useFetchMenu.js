
import { useEffect, useState } from "react";

const useFetchMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        try {
            const res = await fetch(`
                https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${resId}`);


            if (!res.ok) {
                throw new Error("Failed to fetch Menu")
            }


            const data = await res.json();
            console.log(data);


            setResInfo(data);


        } catch (err) {
            console.log(err);

        }
    }
    return resInfo;
}

export default useFetchMenu;