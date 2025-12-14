import RestaurantCard from "../components/RestaurantCard";
import ShimmerCard from "../components/ShimmerCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState("");

    useEffect(()=>{
        console.log("useEffect called");
        fetchData();
    },[]);

    // Filter restaurants based on search input in real-time
    useEffect(() => {
        if (searchInput.trim() === "") {
            // If search is empty, show all restaurants
            setFilteredRestaurant(allRestaurants);
        } else {
            // Filter restaurants based on search input
            const filtered = allRestaurants.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredRestaurant(filtered);
        }
    }, [searchInput, allRestaurants]);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.6552251&lng=76.8442608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            console.log(json);
            const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            setAllRestaurants(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.log("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const filterTopRatedRestaurants = () => {
        const filtered = allRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.4);
        setFilteredRestaurant(filtered);
        console.log(filtered);
    }

    return (
        <div className="body">
            <div className = "search">
                <input type = "text" placeholder = "Search for restaurants..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
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