import React from "react";
import "./Footer.css";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <ul>
        <li>
          <h5>NR6CYCLES</h5>
          <p>© {year}. NR6Cycles. All Rights Reserved.</p>
        </li>
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
          <div></div>
        </li>
      </ul>
    </footer>
  );
}
