import React, { useEffect, useState, useRef } from "react";
import { Slides } from "../../../Data/Slides/Slides";
import "./HeroSection.css";

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const nextHandler = () => {
    return setIndex(index < Slides.length - 1 ? index + 1 : index);
  };

  const prevHandler = () => {
    return setIndex(index > 0 ? index - 1 : index);
  };

  return (
    <section className="container-hero">
      <div className="slide-btn slide-btn-left" onClick={prevHandler}></div>
      <div className="slide-btn slide-btn-right" onClick={nextHandler}></div>
      <div className="slide-viewbox">
        <div
          className="container-slides"
          style={{
            transform: `translate3d(${-index * (100 / Slides.length)}%, 0, 0)`,
            width: `${Slides.length * 100}%`,
          }}
        >
          {Slides.map((slide) => {
            return (
              <div className="slide" key={slide.id}>
                <img
                  src={require(`../../../Assets/Images/Slide-Imgs/${slide.img}`)}
                  alt="Slide"
                />
                <div className="container-slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}</p>
                  <button>READ MORE</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
