import React from "react";
import { data } from "../../utils/data";
import RestaurantCard from "./RestaurantCard";




const Body = () => {

    const [resData, setResData] = React.useState(data);
    const handleFilter = () => {
        const filteredData = data.filter((item) => item.rating <= 4.5);
        setResData(filteredData);
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => setResData(data)}>All Restaurants</button>
                <button className="filter-btn" onClick={() => setResData(data.filter((item) => item.rating > 4.5))}>Top Rated Restaurants</button>
                <button className="filter-btn" onClick={handleFilter}>Low Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resData.map((item) => (
                    <RestaurantCard key={item.id} {...item} />
                ))}
            </div>

        </div>
    )
}


export default Body;