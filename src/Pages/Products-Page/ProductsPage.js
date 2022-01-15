import React from "react";
import { IntLink } from "../../Components/Buttons/Buttons";
import { useLocation } from "react-router-dom";
import "./ProductsPage.css";

export default function ProductsPage() {
  const location = useLocation();

  return (
    <div className="container-products">
      <div className="products-title">
        <h1>{location.state[0].type}</h1>
      </div>
      <ul>
        {location.state.map((product) => {
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
                  </div>
                </div>
                <div className="products-option-img">
                  <img
                    src={require("../../Assets/Images/temp.jpg")}
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
        {/* <li className="products-option">
          <div className="products-wrapper">
            <div className="products-option-link">
              <div>
                <h2>Product Name</h2>
                <p>Catchy text</p>
                <IntLink href="/">View Wheelset</IntLink>
              </div>
              <div>
                <p>Price Range here</p>
                <p>Make a customer review bar</p>
              </div>
            </div>
            <div className="products-option-img">
              <img
                src={require("../../Assets/Images/temp.jpg")}
                alt="Wheel showcase"
              />
            </div>
            <div className="products-option-text">
              <h3>Why this wheelset?</h3>
              <p>text desription here</p>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}
