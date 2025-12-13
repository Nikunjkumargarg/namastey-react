import restaurantList from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import ShimmerCard from "../components/ShimmerCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1561723&lng=77.3289707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=30.1561723&lng=77.3289707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            console.log(json);
            setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }

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
                {isLoading ? (
                    // Show shimmer cards while loading
                    Array(10).fill(0).map((_, index) => (
                        <ShimmerCard key={index} />
                    ))
                ) : (
                    // Show actual restaurant cards when loaded
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key = {restaurant.info.id} restaurantDetail = {restaurant}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default Body;