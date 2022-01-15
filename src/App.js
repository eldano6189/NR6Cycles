import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollTop from "./Components/Scroll-Top/ScrollTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing-Page/LandingPage";
import ProductsPage from "./Pages/Products-Page/ProductsPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ScrollTop>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage authed={true} />} />
          </Routes>
        </ScrollTop>
      </main>
      <Footer />
    </div>
  );
}
