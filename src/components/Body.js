import restaurantList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);

    const filterTopRatedRestaurants = () => {
        setFilteredRestaurant(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4.2));
    }

    return (
        <div className="body">
            <div className = "search">
                <input type = "text" placeholder = "Search for restaurants..." />
                <button className = "search-btn" onClick = {() => {
                    console.log("Search button clicked");
                }}>Search</button>
            </div>
            <div className = "filter">
                <button className = "filter-btn" onClick = {filterTopRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className = "restaurant-list">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} restaurantDetail = {restaurant}/>
                ))}
            </div>
        </div>
    )
}

export default Body;