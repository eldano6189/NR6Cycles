import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [productDD, setProductDD] = useState(false);
  const [storeyDD, setStoreyDD] = useState(false);
  const [supportDD, setSupportDD] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [storeyOpen, setStoreyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const productHandler = () => {
    setProductDD(true);
    setStoreyDD(false);
    setSupportDD(false);
  };

  const storeyHandler = () => {
    setProductDD(false);
    setStoreyDD(true);
    setSupportDD(false);
  };

  const supportHandler = () => {
    setProductDD(false);
    setStoreyDD(false);
    setSupportDD(true);
  };

  const clearLinkHandler = () => {
    setProductDD(false);
    setStoreyDD(false);
    setSupportDD(false);
  };

  const navOpenHandler = () => {
    setNavOpen(!navOpen);
    setProductsOpen(false);
    setStoreyOpen(false);
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
            <a href="/">
              <p>NR6CYCLES</p>
            </a>
          </li>

          <li className="container-nav">
            <nav>
              <p onMouseEnter={productHandler} onMouseOut={clearLinkHandler}>
                PRODUCTS
              </p>
              <p onMouseEnter={storeyHandler} onMouseOut={clearLinkHandler}>
                STOREY
              </p>
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
        onMouseOver={productHandler}
        onMouseOut={clearLinkHandler}
        className={
          productDD
            ? "container-product-dropdown open-dd"
            : "container-product-dropdown"
        }
      >
        <div className="container-product-links">
          <div className="product-link">
            <img src={require("../../Assets/Images/race.jpg")} alt="wheel" />
            <p>RACE &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/endo.jpg")} alt="wheel" />
            <p>PERFORMANCE &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/mtb.jpg")} alt="wheel" />
            <p>MTB &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/cross.jpg")} alt="wheel" />
            <p>GRAVEL / CYCLE X &#8702;</p>
          </div>
        </div>
      </div>

      <div
        onMouseOver={storeyHandler}
        onMouseOut={clearLinkHandler}
        className={
          storeyDD
            ? "container-storey-dropdown open-dd"
            : "container-storey-dropdown"
        }
      >
        <div className="container-storey-links">
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PROMISE &#8702;</p>
          </div>
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PEOPLE &#8702;</p>
          </div>
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PROCESS &#8702;</p>
          </div>
        </div>
      </div>

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
            <p>RETURNS &#8702;</p>
          </div>
          <div className="support-link">
            <p>FAQ &#8702;</p>
          </div>
          <div className="support-link">
            <p>WARRENTY &#8702;</p>
          </div>
          <div className="support-link">
            <p>CONTACT &#8702;</p>
          </div>
        </div>
      </div>

      <div
        className={
          navOpen ? "container-mobile-nav open-nav" : "container-mobile-nav"
        }
      >
        <ul>
          <li onClick={() => setProductsOpen(!productsOpen)}>
            <p>PRODUCTS</p>
            <div className="mobile-arrow">
              <span></span>
              <span></span>
            </div>
          </li>
          <li onClick={() => setStoreyOpen(!storeyOpen)}>
            <p>STOREY</p>
            <div className="mobile-arrow">
              <span></span>
              <span></span>
            </div>
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
            productsOpen ? "mobile-products open-products" : "mobile-products"
          }
        >
          <div className="menu-bk-btn" onClick={() => setProductsOpen(false)}>
            <p>BACK</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/race.jpg")} alt="wheel" />
            <p>RACE &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/endo.jpg")} alt="wheel" />
            <p>PERFORMANCE &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/mtb.jpg")} alt="wheel" />
            <p>MTB &#8702;</p>
          </div>
          <div className="product-link">
            <img src={require("../../Assets/Images/cross.jpg")} alt="wheel" />
            <p>GRAVEL / CYCLE X &#8702;</p>
          </div>
        </div>

        <div
          className={storeyOpen ? "mobile-storey open-storey" : "mobile-storey"}
        >
          <div className="menu-bk-btn" onClick={() => setStoreyOpen(false)}>
            <p>BACK</p>
          </div>
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PROMISE &#8702;</p>
          </div>
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PEOPLE &#8702;</p>
          </div>
          <div className="storey-link">
            <img
              src={require("../../Assets/Images/teamTemp.jpg")}
              alt="wheel"
            />
            <p>OUR PROCESS &#8702;</p>
          </div>
        </div>

        <div
          className={
            supportOpen ? "mobile-support open-support" : "mobile-support"
          }
        >
          <div className="menu-bk-btn" onClick={() => setSupportOpen(false)}>
            <p>BACK</p>
          </div>
          <div className="support-link">
            <p>RETURNS &#8702;</p>
          </div>
          <div className="support-link">
            <p>FAQ &#8702;</p>
          </div>
          <div className="support-link">
            <p>WARRENTY &#8702;</p>
          </div>
          <div className="support-link">
            <p>CONTACT &#8702;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
