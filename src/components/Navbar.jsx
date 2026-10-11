
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <span className="logo-icon">♫</span> BeatWave
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#trending">Trending</a>
        <a href="#albums">Albums</a>
        <a href="#footer">About</a>
      </div>

     <div className="nav-actions">
        <a href="#trending" className="login-btn">
         Explore Music
     </a>
    </div>
    </nav>
  );
}

export default Navbar;