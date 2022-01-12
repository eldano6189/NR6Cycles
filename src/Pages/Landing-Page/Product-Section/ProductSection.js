import React from "react";
import "./ProductSection.css";
import { Products } from "../../../Data/Navigation/Products";

export default function ProductSection() {
  return (
    <section className="container-product-section">
      <div className="container-product-title">
        <h2>SHOP NOW</h2>
      </div>
      <div className="container-product-options">
        <ul>
          {Products.map((product) => {
            return (
              <li key={product.name}>
                <div className="product-image-wrapper">
                  <img
                    src={require(`../../../Assets/Images/Navigation/${product.img}`)}
                    alt="wheel"
                  />
                </div>
                <p>{product.name}&#8702;</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
