import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import userContext from "../../context/userContext";

const Body = () => {
    const [allResData, setAllResData] = useState([]);
    const [resData, setResData] = useState([]);
    const [azFilter, setAzFilter] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filterType, setFilterType] = useState(""); // 'top', 'low', or ''
    const [loading, setLoading] = useState(true);
    const isOnline = useOnlineStatus();
    const { loggedInUser, setUserName } = useContext(userContext);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await res.json();

                const restaurants =
                    json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

                const validRestaurants = restaurants.filter((item) => item?.info);
                setAllResData(validRestaurants);
                setResData(validRestaurants);
                console.log(validRestaurants);


            } catch (error) {
                console.error("Error while fetching data", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);




    // 🔹 Unified filtering logic (runs on every change)
    useEffect(() => {
        let filtered = [...allResData];

        // Search
        if (searchText.trim() !== "") {
            filtered = filtered.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // Rating Filter
        if (filterType === "top") {
            filtered = filtered.filter((item) => item.info.avgRating > 4.5);
        } else if (filterType === "low") {
            filtered = filtered.filter((item) => item.info.avgRating < 4.5);
        }

        // Sort
        if (azFilter) {
            filtered.sort((a, b) => a.info.name.localeCompare(b.info.name));
        } else {
            filtered.sort((a, b) => b.info.name.localeCompare(a.info.name));
        }

        setResData(filtered);
    }, [allResData, searchText, filterType, azFilter]);



    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    if (!isOnline) {
        return (
            <div className="text-center text-red-600 text-xl font-semibold mt-20">
                ⚠️ You are offline. Please check your internet connection.
            </div>
        );
    }

    return (
        <div className="body">
            {/* 🔸 Filter Toolbar */}
            <div className="flex flex-wrap justify-center items-center gap-4 bg-amber-100 p-4 sticky top-0 z-40 shadow-md">
                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-3 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
                        value={searchText}
                        placeholder="🔍 Search restaurants..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <button
                            className="absolute right-3 top-3 text-gray-500 hover:text-red-500"
                            onClick={() => setSearchText("")}
                        >
                            ✕
                        </button>
                    )}
                </div>


                <div className="relative">
                    <input placeholder="User Name"
                        type="text"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-3 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-green-400" />
                </div>

                {/* Sort */}
                <button
                    className={`px-4 py-2 rounded-lg border border-gray-300 hover:bg-green-100 transition-all ${azFilter ? "bg-green-300" : "bg-white"
                        }`}
                    onClick={() => setAzFilter(!azFilter)}
                >
                    {azFilter ? "Sort A-Z" : "Sort Z-A"}
                </button>

                {/* Rating Filters */}
                <button
                    className={`px-4 py-2 rounded-lg border border-gray-300 hover:bg-green-100 transition-all ${filterType === "top" ? "bg-green-300" : ""
                        }`}
                    onClick={() => setFilterType("top")}
                >
                    Top Rated ⭐
                </button>
                <button
                    className={`px-4 py-2 rounded-lg border border-gray-300 hover:bg-green-100 transition-all ${filterType === "low" ? "bg-green-300" : ""
                        }`}
                    onClick={() => setFilterType("low")}
                >
                    Low Rated ⚠️
                </button>

                {/* Reset */}
                <button
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-red-100 transition-all"
                    onClick={() => {
                        setSearchText("");
                        setFilterType("");
                        setAzFilter(false);
                        setResData(allResData);
                    }}
                >
                    Reset 🔄
                </button>
            </div>

            {/* 🔹 Main Content */}
            <div className="flex flex-wrap justify-center gap-6 p-4">
                {loading ? (
                    <Shimmer />
                ) : resData.length > 0 ? (
                    resData.map((item) =>
                        item.info.veg ? (
                            <RestaurantCardPromoted key={item.info.id} info={item.info} />
                        ) : (
                            <RestaurantCard key={item.info.id} info={item.info} />
                        )
                    )
                ) : (
                    <div className="text-gray-600 text-xl mt-10">
                        🍽️ No restaurants found.
                    </div>
                )}
            </div>

        </div>
    );
};

export default Body;
