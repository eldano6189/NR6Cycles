import React from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/Landing-Page/LandingPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}
