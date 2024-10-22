import React from "react";
import '../css/landing.css'; // Import CSS for styling

function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src="/1856985-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h1>Welcome to My Weather App</h1>
        <button className="cta-button" onClick={onNavigate}>Get Weather</button>
      </div>
    </div>
  );
}

export default Home;
