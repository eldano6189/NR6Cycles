import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Data/Products/Products";
import ScrollTop from "./Components/Scroll-Top/ScrollTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing-Page/LandingPage";
import ProductsPage from "./Pages/Products-Page/ProductsPage";
import ProductPage from "./Pages/Product-Page/ProductPage";
import StoryPage from "./Pages/Story-Page/StoryPage";
import ContactPage from "./Pages/Contact-Page/ContactPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ScrollTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            {Products.map((product) => {
              return (
                <Route
                  exact
                  key={product.id}
                  path={`/products/${product.link}`}
                  element={<ProductPage product={product} authed={true} />}
                />
              );
            })}
            <Route path="/story" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage authed={true} />} />
          </Routes>
        </ScrollTop>
      </main>
      <Footer />
    </div>
  );
}
