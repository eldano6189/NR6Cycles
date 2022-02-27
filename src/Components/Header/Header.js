import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../Assets/SVG/Logo";
import { Info } from "../../Data/Info/Info";
import { Modal } from "../Modal/Modal";
import "./Header.css";

export default function Header() {
  const [supportDD, setSupportDD] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [crashModal, setCrashModal] = useState(false);
  const [warrentyModal, setWarrantyModal] = useState(false);

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

  const crashHandler = () => {
    setCrashModal(!crashModal);
  };

  const warrantyHandler = () => {
    setWarrantyModal(!warrentyModal);
  };

  return (
    <div className="container-header">
      <div className="container-offer-bar">
        <p>*2 YEAR WARRANTY ON ALL WHEELSETS</p>
      </div>
      {crashModal ? <Modal state={crashHandler} props={Info[0]} /> : null}
      {warrentyModal ? <Modal state={warrantyHandler} props={Info[1]} /> : null}
      <header>
        <ul>
          <li className="container-logo">
            <Link to="/">
              <Logo />
            </Link>
          </li>

          <li className="container-nav">
            <nav>
              <Link to="/products">
                <p>PRODUCTS</p>
              </Link>
              <Link to="/story">
                <p>STORY</p>
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
          <div className="support-link">
            <p onClick={crashHandler}>CRASH REPLACEMENT &#8702;</p>
          </div>
          <div className="support-link">
            <p onClick={warrantyHandler}>WARRANTY &#8702;</p>
          </div>
          <div className="support-link">
            <Link to="/contact">
              <p>CONTACT &#8702;</p>
            </Link>
          </div>
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
            <Link to="/story">
              <p>STORY</p>
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
          <div className="support-link">
            <p onClick={crashHandler}>CRASH REPLACEMENT &#8702;</p>
          </div>
          <div className="support-link">
            <p onClick={warrantyHandler}>WARRANTY &#8702;</p>
          </div>
          <div className="support-link">
            <Link to="/contact" onClick={navOpenHandler}>
              <p>CONTACT &#8702;</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
