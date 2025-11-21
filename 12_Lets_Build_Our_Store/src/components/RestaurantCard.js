import { Link, useNavigate } from "react-router-dom";
import * as config from "../../utils/config.js";

const RestaurantCard = ({ info, showViewButton = true }) => {
    const navigate = useNavigate();

    const {
        id,
        name = "Unnamed Restaurant",
        cuisines = [],
        cloudinaryImageId,
        avgRating,
        sla,
        areaName = "Unknown Area",
    } = info || {};

    const imageUrl = cloudinaryImageId
        ? `${config.imgUrl}/${cloudinaryImageId}`
        : "https://via.placeholder.com/300x200?text=No+Image";

    return (
        <div
            onClick={() =>
                navigate(`/restaurants/${id}`, {
                    state: { name, cuisines },
                })
            }
            className="cursor-pointer w-72 p-4 m-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-200 bg-white"
        >
            <img
                className="w-full h-44 object-cover rounded-xl"
                src={imageUrl}
                alt={name}
                loading="lazy"
            />
            <div className="mt-3">
                <h4 className="text-lg font-semibold text-gray-800 truncate">{name}</h4>
                <p className="text-sm text-gray-500 truncate">
                    {cuisines.length ? cuisines.join(", ") : "No cuisines listed"}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                    ⭐ {avgRating ?? "N/A"} &nbsp;|&nbsp; ⏱️ {sla?.deliveryTime ?? "N/A"} mins
                </p>
                <p className="text-sm text-gray-500">📍 {areaName}</p>




                {showViewButton && (
                    <Link
                        to={`/restaurants/${id}`}
                        className="inline-block mt-3 px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                        onClick={(e) => e.stopPropagation()}
                    >
                        View Details
                    </Link>
                )}
            </div>
        </div>
    );
};



export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-2 left-2 bg-green-400 text-xs font-bold px-2 py-1 rounded-md shadow-md">
                    Pure Veg
                </div>
                <RestaurantCard {...props} />
            </div>
        );
    }
}


export default RestaurantCard;
