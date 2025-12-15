const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <h3>Email Us</h3>
                        <p>nikunjkumargarg98@gmail.com</p>
                        <p>aggarwalkgn@gmail.com</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📞</div>
                        <h3>Call Us</h3>
                        <p>+91 8950377998</p>
                        <p>Mon-Sun: 9:00 AM - 10:00 PM</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">📍</div>
                        <h3>Visit Us</h3>
                        <p>Yamuna Nagar, Haryana, India</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">💬</div>
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <span>Instagram: <a href="">Nikunj Kumar</a></span>
                            <span>LinkedIn: <a href="www.linkedin.com/in/nikunjkgarg"></a></span>
                            <span>Github: <a href="https://github.com/Nikunjkumargarg"></a></span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form className="contact-form">
                        <h2>Send us a Message</h2>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="What is this regarding?" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Tell us more..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;