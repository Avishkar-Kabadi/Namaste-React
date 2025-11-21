import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useFetchMenu from "../../utils/useFetchMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuPage = () => {

    const location = useLocation();

    const { name, cuisines } = location.state;

    React.useEffect(() => {
    }, []);

    const { id } = useParams();
    const resData = useFetchMenu(id);
    console.log(resData);


    const [showIndex, setShowIndex] = React.useState(null);




    return (<div className="text-center p-4">
        <h1 className="text-xl font-bold mb-4">{name} - {id}</h1>
        <h1 className="text-xl font-bold mb-4">{cuisines.join(", ")}
        </h1>

        <div> {Object.values(categories).map((category) => (
            <RestaurantCategory
                key={category.id}
                category={category}
                setShowIndex={setShowIndex}
                showIndex={showIndex} />
        ))}
        </div>


    </div>)

}

export default RestaurantMenuPage;




const categories = {
    "cat1": {
        id: "cat1",
        categoryName: "Recommended",
    },
    "cat2": {
        id: "cat2",
        categoryName: "Newly Added",
    },
    "cat3": {
        id: "cat3",
        categoryName: "Popular",
    },
    "cat4": {
        id: "cat4",
        categoryName: "Main Course",
    },
    "cat5": {
        id: "cat5",
        categoryName: "Desserts",
    },
    "cat6": {
        id: "cat6",
        categoryName: "Beverages",
    },
};
