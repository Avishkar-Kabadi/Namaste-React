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

export default RestaurantCard;