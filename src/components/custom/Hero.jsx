import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link

function Hero() {
  const heroStyle = {
    backgroundImage: "url(/background1.png)", // Ensure the image path is correct
    backgroundSize: "cover", // Ensures the image covers the container
    backgroundPosition: "center", // Centers the image
    height: "100vh", // Full viewport height
    width: "100%", // Full width
    display: "flex", // Use flexbox to center content
    flexDirection: "column", // Stack children vertically
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    color: "white", // Text color
    textAlign: "center", // Center text
  };

  // Reviews array with more reviews
  const reviews = [
    {
      review: "I love knowing exactly when my flights are, when they are delayed, what gate to leave from, and all the other amazing TripIt Pro features.",
      author: "Ann B.",
    },
    {
      review: "TripEase made my travel experience smoother than ever. No more guessing with delays or cancellations!",
      author: "John D.",
    },
    {
      review: "This is my go-to app for all travel planning! It's so easy to use.",
      author: "Sarah K.",
    },
    {
      review: "Best travel app I've used. Keeps everything organized and up to date.",
      author: "Mike T.",
    },
    {
      review: "TripEase made my last vacation unforgettable! Highly recommend it.",
      author: "Emily R.",
    },
    {
      review: "Fantastic app! It saved me so much time on my travel arrangements.",
      author: "Tom W.",
    },
    {
      review: "The personalized recommendations were spot on. Loved it!",
      author: "Jessica L.",
    },
    {
      review: "Easy to navigate and so many features! Perfect for travelers.",
      author: "David M.",
    },
    {
      review: "I can't imagine planning my trips without TripEase. It's a lifesaver!",
      author: "Laura P.",
    },
    {
      review: "Excellent customer service and user-friendly design.",
      author: "Chris S.",
    },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  // Change review every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div>
      <div style={heroStyle}>
        <h1 className="font-extrabold text-[50px] mt-16">
          <span className="text-[#f5f6fa]">Discover Your New Adventure with AI:</span>
          <div>Where Every Journey is Customized for You.</div>
        </h1>

        <h4 className="text-xl text-gray-200 " style={{ marginTop: "30px" }}>
          Unleash your new adventure with AI. TripEase uses advanced technology to
          craft unique travel experiences tailored to you, guiding you to
          unforgettable destinations.
        </h4>

        <Link to="/get-started">
          <button
            className="bg-[#f17d4b] text-white rounded"
            style={{
              marginTop: "40px",
              padding: "16px 32px",
              fontSize: "1.25rem",
              borderRadius: "8px",
            }}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h2 className="text-3xl font-bold">What Our Users Are Saying</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            marginTop: "20px",
            position: "relative",
            overflow: "hidden", // Hide overflow to achieve slide effect
          }}
        >
          {/* Review Box */}
          <div
            style={{
              display: "flex", // Use flex to arrange reviews
              width: "80%",
              padding: "20px",
              border: "2px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.5s ease-in-out", // Animation for sliding
              transform: `translateX(-${currentReview * 100}%)`, // Move to the left based on current review
              minWidth: `${reviews.length * 100}%`, // Total width to fit all reviews
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} style={{ flex: "1 0 100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}> {/* Center each review */}
                <p className="text-xl">{`"${review.review}"`}</p>
                <p className="font-bold mt-4">{`- ${review.author}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "#000000", // Dark background
    color: "#fff", // White text color
    padding: "20px 0", // Padding for top and bottom
    textAlign: "center", // Center the text
    marginTop: "50px", // Space above the footer
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="footer-content">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/about-us" style={{ color: "#fff", textDecoration: "none" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" style={{ color: "#fff", textDecoration: "none" }}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <p style={{ marginTop: "10px" }}>© 2024 TripEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Hero;
