import React, { useState } from "react";
import ProgressBar from "../../Components/Progress-Bar/ProgressBar";
import Search from "../../Assets/SVG/Search";
import { IntLink } from "../../Components/Buttons/Buttons";
import { Products } from "../../Data/Products/Products";
import "./ProductsPage.css";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className="container-products">
      <div className="products-search">
        <Search />
        <input type="text" placeholder="Search" onChange={searchHandler} />
      </div>
      <ul className="container-product-option">
        {Products.filter((product) =>
          product.name.toLowerCase().includes(search)
        ).map((product) => {
          return (
            <li className="products-option" key={product.id}>
              <div className="products-wrapper">
                <div className="products-option-link">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.slogan}</p>
                    <IntLink href={product.link}>View Wheelset</IntLink>
                  </div>
                  <div>
                    <p>{product.price}</p>
                    <p>{product.custReview}</p>
                    <ProgressBar />
                  </div>
                </div>
                <div className="products-option-img">
                  <img
                    src={require(`../../Assets/Images/Products/${product.mainImg}`)}
                    alt="Wheel showcase"
                  />
                </div>
                <div className="products-option-text">
                  <h3>Why this wheelset?</h3>
                  <p>{product.briefDesc}</p>
                </div>
              </div>
            </li>
          );
        })}
        {/* {Products.map((product) => {
          return (
            <li className="products-option" key={product.id}>
              <div className="products-wrapper">
                <div className="products-option-link">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.slogan}</p>
                    <IntLink href={product.link}>View Wheelset</IntLink>
                  </div>
                  <div>
                    <p>{product.price}</p>
                    <p>{product.custReview}</p>
                    <ProgressBar />
                  </div>
                </div>
                <div className="products-option-img">
                  <img
                    src={require(`../../Assets/Images/Products/${product.mainImg}`)}
                    alt="Wheel showcase"
                  />
                </div>
                <div className="products-option-text">
                  <h3>Why this wheelset?</h3>
                  <p>{product.briefDesc}</p>
                </div>
              </div>
            </li>
          );
        })} */}
      </ul>
    </div>
  );
}
