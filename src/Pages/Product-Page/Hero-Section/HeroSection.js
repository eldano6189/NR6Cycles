import "./HeroSection.css";
import React, { useState } from "react";
import { IntLink } from "../../../Components/Buttons/Buttons";

export default function HeroSection({ product }) {
  const [whichImg, setWhichImg] = useState(product.imgs[0]);

  return (
    <div className="container-product-hero">
      <div className="container-product-images">
        <div className="container-product-multi-images">
          <ul>
            {product.imgs.map((prod) => {
              return (
                <li
                  style={
                    whichImg === prod
                      ? { border: "1px solid var(--color4)" }
                      : null
                  }
                  key={prod}
                  onClick={() => setWhichImg(prod)}
                >
                  <img
                    src={require(`../../../Assets/Images/Products/${prod}`)}
                    alt="WheelSet"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container-product-main-image">
          <div className="container-product-main-image-wrapper">
            <img
              src={require(`../../../Assets/Images/Products/${whichImg}`)}
              alt="Main img"
            />
          </div>
        </div>
      </div>
      <div className="container-product-text">
        <div className="container-product-title">
          <h1>{product.name}</h1>
          <h2>{product.slogan}</h2>
        </div>
        <div className="container-product-config">
          <p>{product.price}</p>
          <IntLink href="/contact">ENQUIRE</IntLink>
        </div>
      </div>
    </div>
  );
}
