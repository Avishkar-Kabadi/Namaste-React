import React from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
const Body = () => {
    const [allResData, setAllResData] = React.useState([]);
    const [resData, setResData] = React.useState([]);
    const [azFilter, setAzFilter] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");


    React.useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    // "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4914883&lng=73.82172899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                    // "https://namastedev.com/api/v1/listRestaurants"
                    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                );
                const json = await res.json();
                const restaurants =
                    json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                        ?.restaurants;


                const validRestaurants = restaurants.filter((item) => item?.info);
                console.log(validRestaurants);

                setAllResData(validRestaurants);
                setResData(validRestaurants);

            } catch (error) {
                console.log("Error while fetching data", error);
            }
        })();
    }, []);


    // const filterData = () => {
    //     const filteredData = allResData.filter((item) =>
    //         item.info.name.toLowerCase().includes(searchText.toLowerCase())
    //     );
    //     setResData(filteredData);
    // }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"

                        // with using direct onChange event
                        className="search-box" value={searchText} placeholder="search here..."
                        onChange={(e) => {
                            setSearchText(e.target.value)
                            setResData(() => allResData.filter((item) =>
                                item.info.name.toLowerCase().includes(e.target.value.toLowerCase())
                            ));
                        }} />

                    <button className="clear-btn" onClick={() => {
                        setSearchText("")
                        setResData(allResData);
                    }}>X</button>

                    {/* With function and state */}
                    {/* <button className="search-btn" onClick={filterData}>Search</button> */}

                    {/* -----Another Approach to add filter----- */}

                    {/* <button className="search-btn" onClick={() => {
                        const filteredData = allResData.filter((item) =>
                            item.info.name.toLowerCase().includes(document.querySelector(".search-box").value.toLowerCase())
                        );
                        setResData(filteredData);
                    }}>Search</button> */}


                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        setResData((prev) =>
                            [...prev].sort((a, b) => azFilter ?
                                a.info.name.localeCompare(b.info.name) :
                                b.info.name.localeCompare(a.info.name))
                        );
                        setAzFilter(!azFilter);
                    }}
                >
                    {azFilter ? "Sort Z-A" : "Sort A-Z"}
                </button>



                <button
                    className="filter-btn"
                    onClick={() => setResData(allResData.filter((item) => item?.info?.avgRating > 4.5))}
                >
                    Top Rated
                </button>

                <button className="filter-btn" onClick={() => setResData(allResData.filter((item) => item?.info?.avgRating < 4.5))}>
                    Low Rated
                </button>
                <button className="filter-btn" onClick={() => {
                    setResData(allResData);
                    setAzFilter(false);
                }}>
                    Reset Filters
                </button>
            </div>

            <div className="res-container">
                {resData.length > 0 ? (
                    resData.map((item) => (
                        <RestaurantCard key={item.info.id} info={item.info} />
                    ))
                ) : (
                    <Shimmer />
                )}
            </div>


        </div >
    );
};

export default Body;
