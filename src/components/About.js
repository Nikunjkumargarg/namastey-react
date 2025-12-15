const About = () => {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1 className="about-title">About Us</h1>
                <p className="about-subtitle">Delivering Delicious Food to Your Doorstep</p>
            </div>
            
            <div className="about-content">
                <div className="about-card">
                    <div className="about-icon">🍽️</div>
                    <h2>Our Mission</h2>
                    <p>We are committed to bringing you the best food from your favorite restaurants, delivered fresh and hot to your doorstep. Our mission is to make quality food accessible to everyone, anytime, anywhere.</p>
                </div>

                <div className="about-card">
                    <div className="about-icon">⭐</div>
                    <h2>Why Choose Us</h2>
                    <ul className="about-list">
                        <li>Wide selection of restaurants and cuisines</li>
                        <li>Fast and reliable delivery service</li>
                        <li>Fresh ingredients and quality food</li>
                        <li>Easy ordering process</li>
                        <li>24/7 customer support</li>
                    </ul>
                </div>

                <div className="about-card">
                    <div className="about-icon">🚀</div>
                    <h2>Our Story</h2>
                    <p>Founded with a passion for great food and excellent service, we've been serving thousands of happy customers across the city. We partner with the best restaurants to ensure you get nothing but the finest dining experience, delivered right to your home.</p>
                </div>
            </div>

            <div className="about-stats">
                <div className="stat-item">
                    <div className="stat-number">10K+</div>
                    <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Restaurant Partners</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">50K+</div>
                    <div className="stat-label">Orders Delivered</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">4.8</div>
                    <div className="stat-label">Average Rating</div>
                </div>
            </div>
        </div>
    )
}
export default About;