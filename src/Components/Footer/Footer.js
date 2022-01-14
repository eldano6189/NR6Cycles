import React from "react";
import Facebook from "../../Assets/SVG/Facebook";
import Instagram from "../../Assets/SVG/Instagram";
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
            <a href="/">RACE</a>
            <a href="/">PERFORMANCE</a>
            <a href="/">MTB</a>
            <a href="/">GRAVEL</a>
            <a href="/">CYCLE X</a>
            <a href="/">TRACK</a>
          </li>
          <li>
            <p>STOREY</p>
            <a href="/">OUR PROMISE</a>
            <a href="/">OUR PEOPLE</a>
            <a href="/">OUR PROCESS</a>
          </li>
          <li>
            <p>SUPPORT</p>
            <a href="/">RETURNS</a>
            <a href="/">FAQ</a>
            <a href="/">WARRENTY</a>
            <a href="/">CONTACT US</a>
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
