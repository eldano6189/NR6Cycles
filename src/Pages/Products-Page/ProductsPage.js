import React, { useState } from "react";
import ProgressBar from "../../Components/Progress-Bar/ProgressBar";
import Search from "../../Assets/SVG/Search";
import NoProduct from "../../Components/No-Product/NoProduct";
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
          product.keyword.toLowerCase().includes(search)
        ).map((product) => {
          return (
            <li className="products-option" key={product.id}>
              <div className="products-wrapper">
                <div className="products-option-link">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.slogan}</p>
                    <IntLink href={`/products/${product.link}`}>
                      View Wheelset
                    </IntLink>
                  </div>
                  <div>
                    <p>{product.price}</p>
                    <p>Custom Built to Order</p>
                    <ProgressBar
                      rev={product.reviews.score}
                      total={product.reviews.total}
                    />
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
        {Products.find((product) =>
          product.keyword.toLowerCase().includes(search)
        ) ? null : (
          <NoProduct />
        )}
      </ul>
    </div>
  );
}
