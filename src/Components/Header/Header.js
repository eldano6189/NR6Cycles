import React, { useState } from "react";
import { Products } from "../../Data/Navigation/Products";
import { Storey } from "../../Data/Navigation/Storey";
import { Support } from "../../Data/Navigation/Support";
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
          {Products.map((product) => {
            return (
              <div className="product-link" key={product.name}>
                <img
                  src={require(`../../Assets/Images/Navigation/${product.img}`)}
                  alt="wheel"
                />
                <p>{product.name}&#8702;</p>
              </div>
            );
          })}
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
          {Storey.map((storey) => {
            return (
              <div className="storey-link" key={storey.name}>
                <img
                  src={require(`../../Assets/Images/Navigation/${storey.img}`)}
                  alt="wheel"
                />
                <p>{storey.name} &#8702;</p>
              </div>
            );
          })}
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
          {Products.map((product) => {
            return (
              <div className="product-link" key={product.name}>
                <img
                  src={require(`../../Assets/Images/Navigation/${product.img}`)}
                  alt="wheel"
                />
                <p>{product.name}&#8702;</p>
              </div>
            );
          })}
        </div>

        <div
          className={storeyOpen ? "mobile-storey open-storey" : "mobile-storey"}
        >
          <div className="menu-bk-btn" onClick={() => setStoreyOpen(false)}>
            <p>BACK</p>
          </div>
          {Storey.map((storey) => {
            return (
              <div className="storey-link" key={storey.name}>
                <img
                  src={require(`../../Assets/Images/Navigation/${storey.img}`)}
                  alt="wheel"
                />
                <p>{storey.name} &#8702;</p>
              </div>
            );
          })}
        </div>

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
