import React from "react";
import "./ProductPage.css";
import { IntLink } from "../../Components/Buttons/Buttons";

export default function Product({ product }) {
  console.log(product);

  return (
    <div className="container-product">
      <div className="container-product-hero">
        <div className="product-hero-wrapper">
          <div className="container-product-images">
            <div className="container-product-multi-images"></div>
            <div className="container-product-main-image"></div>
          </div>
          <div className="container-product-text">
            <div className="container-product-title">
              <h1>{product.name}</h1>
              <h2>{product.slogan}</h2>
            </div>
            <div className="container-product-config">
              <p>{product.price}</p>
              <IntLink href="/">CONFIGURE</IntLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
