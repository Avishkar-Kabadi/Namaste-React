import ReactDOM from "react-dom/client";

import "./index.css";
import { data } from "./Data";



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { name, cuisine, image, rating, deliveryTime } = props;


    return (
        <div className="res-card" >
            <img className="res-logo" src={image} />
            <h4>{name}</h4>
            <p>Cuisine:{cuisine}</p>
            <p>Rating: {rating} stars</p>
            <p>{deliveryTime}</p>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {data.map((item) => (
                    <RestaurantCard key={item.id} {...item} />
                ))}
            </div>

        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);