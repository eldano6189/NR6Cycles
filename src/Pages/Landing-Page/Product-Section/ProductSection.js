import React from "react";
import "./ProductSection.css";
import { Products } from "../../../Data/Products/Products";
import { Link } from "react-router-dom";

export default function ProductSection() {
  const RecentProducts = Products.slice(Math.max(Products.length - 4, 0));

  return (
    <section className="container-product-section">
      <div className="container-products-title">
        <h2>RECENT PRODUCTS</h2>
      </div>
      <div className="container-product-options">
        <ul>
          {RecentProducts.map((product) => {
            return (
              <Link key={product.id} to="/products">
                <li>
                  <div className="product-image-wrapper">
                    <img
                      src={require(`../../../Assets/Images/Products/${product.imgs[0]}`)}
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
