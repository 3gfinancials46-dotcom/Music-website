
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            ♫ BeatWave
          </a>
          <p>
            Feel the rhythm. Discover new sounds.
            Enjoy your favorite music every day.
          </p>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#trending">Trending Songs</a>
          <a href="#albums">Albums</a>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://youtube.com">YouTube</a>
          <a href="https://facebook.com">Facebook</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BeatWave. All rights reserved.</p>
        <p>Made with ♡ for music lovers</p>
      </div>
    </footer>
  );
}

export default Footer;