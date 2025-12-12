import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src = "https://static.vecteezy.com/system/resources/previews/053/762/082/non_2x/food-delivery-catering-fast-food-logo-icon-free-vector.jpg" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className = "restaurant-card">
            <img src = "https://themasalewale.com/cdn/shop/files/4_6d81b098-0d64-4eb8-b696-66f040059234_3000x.jpg?v=1698906398" className = "restaurant-logo" />
            <h3>Restaurant Name</h3>
            <h4>Restaurant Description</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className = "search">
                <input type = "text" placeholder = "Search for restaurants..." />
                <button>Search</button>
            </div>
            <div className = "restaurant-list">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


