import React from "react";
import "./ProductSection.css";
import { Products } from "../../../Data/Navigation/Products";
import { Link } from "react-router-dom";

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
              <Link
                key={product.name}
                to={product.link}
                state={product.passInfo}
              >
                <li>
                  <div className="product-image-wrapper">
                    <img
                      src={require(`../../../Assets/Images/Navigation/${product.img}`)}
                      alt="wheel"
                    />
                  </div>
                  <p>{product.name}&#8702;</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
