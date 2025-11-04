import * as config from "../../utils/config";

const RestaurantCard = ({ info }) => {

    const {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        sla, areaName
    } = info;

    const imageUrl = cloudinaryImageId
        ? `${config.imgUrl}/${cloudinaryImageId}`
        : "https://via.placeholder.com/300x200?text=No+Image";

    return (
        <div className="res-card">
            <img className="res-logo" src={imageUrl} alt={name} />
            <h4>{name}</h4>
            <p>Cuisines: {cuisines?.join(", ")}</p>
            <p>Rating: {avgRating ?? "N/A"} ⭐</p>
            <p>Delivery: {sla?.deliveryTime ?? "N/A"} mins</p>
            <p>Area: {areaName}</p>
        </div>
    );
};

export default RestaurantCard;
