import React from "react";
import Facebook from "../../Assets/SVG/Facebook";
import Instagram from "../../Assets/SVG/Instagram";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="container-footer">
        <div className="footer-logo">
          <h5>NR6CYCLES</h5>
          <p>© {year}. NR6Cycles. All Rights Reserved.</p>
        </div>
        <ul>
          <li>
            <p>PRODUCTS</p>
            <Link to="/products">RACE</Link>
            <Link to="/products">PERFORMANCE</Link>
            <Link to="/products">MTB</Link>
            <Link to="/products">GRAVEL</Link>
          </li>
          <li>
            <p>STOREY</p>
            <Link to="/storey">OUR PEOPLE</Link>
          </li>
          <li>
            <p>SUPPORT</p>
            <Link to="/">RETURNS</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">WARRENTY</Link>
            <Link to="/">CONTACT US</Link>
          </li>
          <li>
            <p>FOLLOW US</p>
            <div className="container-social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100063709052076"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/nr6cyclinguk/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
