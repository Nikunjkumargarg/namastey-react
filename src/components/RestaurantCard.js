import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantDetail} = props;
    const {name,availability,avgRating,costForTwo} = restaurantDetail.info;
    return (    
        <div className = "restaurant-card">
            <img src = {`${CDN_URL}${restaurantDetail.info.cloudinaryImageId}`} className = "restaurant-logo" />
            <h3>{name}</h3>
            <h4>{availability.opened ? "Open" : "Closed"}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;