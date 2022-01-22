import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Support } from "../../Data/Navigation/Support";
import "./Header.css";

export default function Header() {
  const [supportDD, setSupportDD] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const supportHandler = () => {
    setSupportDD(true);
  };

  const clearLinkHandler = () => {
    setSupportDD(false);
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setSupportOpen(false);
  };

  return (
    <div className="container-header">
      <div className="container-offer-bar">
        <p>*2 YEAR WARRENTY ON ALL WHEELSETS</p>
      </div>

      <header>
        <ul>
          <li className="container-logo">
            <Link to="/">
              <p>NR6CYCLES</p>
            </Link>
          </li>

          <li className="container-nav">
            <nav>
              <Link to="/products">
                <p>PRODUCTS</p>
              </Link>
              <Link to="/storey">
                <p>STOREY</p>
              </Link>
              <p onMouseEnter={supportHandler} onMouseOut={clearLinkHandler}>
                SUPPORT
              </p>
            </nav>
          </li>

          <li className="container-hamburger">
            <div
              className={navOpen ? "hamburger active" : "hamburger"}
              onClick={navOpenHandler}
            ></div>
          </li>
        </ul>
      </header>

      <div
        onMouseOver={supportHandler}
        onMouseOut={clearLinkHandler}
        className={
          supportDD
            ? "container-support-dropdown open-dd"
            : "container-support-dropdown"
        }
      >
        <div className="container-support-links">
          {Support.map((support) => {
            return (
              <div className="support-link" key={support.name}>
                <p>{support.name} &#8702;</p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={
          navOpen ? "container-mobile-nav open-nav" : "container-mobile-nav"
        }
      >
        <ul>
          <li onClick={navOpenHandler}>
            <Link to="/products">
              <p>PRODUCTS</p>
              <div className="mobile-arrow">
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
          <li onClick={navOpenHandler}>
            <Link to="/storey">
              <p>STOREY</p>
              <div className="mobile-arrow">
                <span></span>
                <span></span>
              </div>
            </Link>
          </li>
          <li onClick={() => setSupportOpen(!supportOpen)}>
            <p>SUPPORT</p>
            <div className="mobile-arrow">
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>

        <div
          className={
            supportOpen ? "mobile-support open-support" : "mobile-support"
          }
        >
          <div className="menu-bk-btn" onClick={() => setSupportOpen(false)}>
            <p>BACK</p>
          </div>
          {Support.map((support) => {
            return (
              <div className="support-link" key={support.name}>
                <p>{support.name} &#8702;</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
