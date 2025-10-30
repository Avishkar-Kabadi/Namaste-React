import ReactDOM from "react-dom/client";

import "./index.css";
import { data } from "./Data";

import Logo from "./Assets/Logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} />
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