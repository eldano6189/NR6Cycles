import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollTop from "./Components/Scroll-Top/ScrollTop";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing-Page/LandingPage";
import ProductsPage from "./Pages/Products-Page/ProductsPage";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={1000}
          classNames="page"
          unmountOnExit
        >
          <main>
            <ScrollTop>
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductsPage />} />
              </Routes>
            </ScrollTop>
          </main>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
