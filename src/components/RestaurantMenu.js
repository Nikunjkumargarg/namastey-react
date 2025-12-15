import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { id } = useParams();

    // Static restaurant info
    const restaurantInfo = {
        name: "Delicious Bites Restaurant",
        cuisines: ["North Indian", "Chinese", "Italian", "Fast Food"],
        avgRating: 4.5,
        deliveryTime: 30,
        costForTwo: 500
    };

    // Static menu items organized by categories
    const menuCategories = [
        {
            title: "Recommended",
            items: [
                {
                    name: "Butter Chicken",
                    price: 350,
                    description: "Tender chicken cooked in a rich, creamy tomato-based gravy with butter and aromatic spices."
                },
                {
                    name: "Paneer Tikka",
                    price: 280,
                    description: "Marinated cottage cheese cubes grilled to perfection, served with mint chutney."
                },
                {
                    name: "Chicken Biryani",
                    price: 320,
                    description: "Fragrant basmati rice cooked with tender chicken pieces and aromatic spices."
                }
            ]
        },
        {
            title: "Main Course",
            items: [
                {
                    name: "Dal Makhani",
                    price: 180,
                    description: "Creamy black lentils slow-cooked with butter and cream, a North Indian classic."
                },
                {
                    name: "Palak Paneer",
                    price: 250,
                    description: "Fresh cottage cheese cubes in a smooth spinach gravy with mild spices."
                },
                {
                    name: "Chicken Curry",
                    price: 300,
                    description: "Spicy chicken curry cooked with onions, tomatoes, and traditional Indian spices."
                },
                {
                    name: "Veg Fried Rice",
                    price: 200,
                    description: "Stir-fried rice with mixed vegetables, eggs, and soy sauce."
                }
            ]
        },
        {
            title: "Starters",
            items: [
                {
                    name: "Chicken Wings",
                    price: 250,
                    description: "Crispy fried chicken wings tossed in spicy sauce, served with ranch dip."
                },
                {
                    name: "Spring Rolls",
                    price: 150,
                    description: "Crispy vegetable spring rolls served with sweet and sour sauce."
                },
                {
                    name: "Chicken Lollipop",
                    price: 280,
                    description: "Spicy and tangy chicken drumettes marinated in special spices."
                },
                {
                    name: "Mozzarella Sticks",
                    price: 220,
                    description: "Golden fried mozzarella cheese sticks served with marinara sauce."
                }
            ]
        },
        {
            title: "Desserts",
            items: [
                {
                    name: "Gulab Jamun",
                    price: 120,
                    description: "Soft, spongy milk balls soaked in sweet rose-flavored syrup."
                },
                {
                    name: "Ice Cream",
                    price: 150,
                    description: "Creamy vanilla ice cream topped with chocolate sauce and nuts."
                },
                {
                    name: "Chocolate Brownie",
                    price: 180,
                    description: "Warm chocolate brownie served with vanilla ice cream."
                }
            ]
        },
        {
            title: "Beverages",
            items: [
                {
                    name: "Fresh Lime Soda",
                    price: 80,
                    description: "Refreshing lime soda with a hint of mint."
                },
                {
                    name: "Mango Lassi",
                    price: 100,
                    description: "Creamy yogurt drink blended with fresh mango pulp."
                },
                {
                    name: "Cold Coffee",
                    price: 120,
                    description: "Iced coffee with milk, sugar, and a scoop of vanilla ice cream."
                },
                {
                    name: "Fresh Orange Juice",
                    price: 90,
                    description: "Freshly squeezed orange juice, served chilled."
                }
            ]
        }
    ];

    return (
        <div className="restaurant-menu-page">
            <div className="restaurant-header">
                <h1>{restaurantInfo.name}</h1>
                <p>{restaurantInfo.cuisines.join(", ")}</p>
                <div className="restaurant-details">
                    <span>⭐ {restaurantInfo.avgRating}</span>
                    <span>•</span>
                    <span>{restaurantInfo.deliveryTime} mins</span>
                    <span>•</span>
                    <span>₹{restaurantInfo.costForTwo} for two</span>
                </div>
                <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
                    Restaurant ID: {id}
                </p>
            </div>
            <div className="menu-section">
                <h2>Menu</h2>
                {menuCategories.map((category, index) => (
                    <div key={index} className="menu-category">
                        <h3>{category.title}</h3>
                        <div className="menu-items">
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="menu-item">
                                    <div className="menu-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="menu-item-price">₹{item.price}</p>
                                        <p className="menu-item-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RestaurantMenu;