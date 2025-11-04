import { Link, useNavigate } from "react-router-dom";
import * as config from "../utils/config.js";

const RestaurantCard = ({ info }) => {

    const {
        id,
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        sla, areaName
    } = info;

    const navigate = useNavigate();


    const imageUrl = cloudinaryImageId
        ? `${config.imgUrl}/${cloudinaryImageId}`
        : "https://via.placeholder.com/300x200?text=No+Image";

    return (
        <div onClick={() => navigate(`/restaurants/${id}`)} className="res-card">
            <img className="res-logo" src={imageUrl} alt={name} />
            <h4>{name}</h4>
            <p>Cuisines: {cuisines?.join(", ")}</p>
            <p>Rating: {avgRating ?? "N/A"} ⭐</p>
            <p>Delivery: {sla?.deliveryTime ?? "N/A"} mins</p>
            <p>Area: {areaName}</p>
            <Link className="filter-btn" to={"/restaurants/" + id}>View</Link>
        </div >
    );
};

export default RestaurantCard;
