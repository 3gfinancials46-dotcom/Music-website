
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app" id="home">
      <Navbar />

      
    <section className="hero">
     <h1>Feel Every Beat</h1>
      <p>Discover your favorite music and artists.</p>

     <a href="#trending" className="hero-btn">
      Explore Music
      </a>
</section>

      <section className="music-section" id="trending">
        <h2>Trending Music</h2>

        <div className="music-grid">
          <div className="music-card">
            <img
              src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500"
              alt="Midnight Dreams"
            />
            <h3>Midnight Dreams</h3>
            <p>Luna</p>
          </div>

          <div className="music-card">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500"
              alt="Summer Vibes"
            />
            <h3>Summer Vibes</h3>
            <p>Alex Beats</p>
          </div>

          <div className="music-card">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500"
              alt="Lost in Sound"
            />
            <h3>Lost in Sound</h3>
            <p>DJ Nova</p>
          </div>

          <div className="music-card">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500"
              alt="Ocean Lights"
            />
            <h3>Ocean Lights</h3>
            <p>Mira</p>
          </div>
        </div>
      </section>

     
  <section id="albums">
    <h2>Music Albums</h2>
   <img
   src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800"
    alt="Live Music Concert" />

     <p>Enjoy your favorite music!</p>
    </section>

      <Footer />
    </div>
  );
}

export default App;