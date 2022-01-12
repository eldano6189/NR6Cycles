import React, { useEffect, useState, useRef } from "react";
import "./TestimonialSection.css";
import { Testimonials } from "../../../Data/Testimonials/Testimonials";

export default function TestimonialSection() {
  const [testIndex, setTestIndex] = useState(0);
  const timeoutTestRef = useRef(null);

  const resetTestTimeout = () => {
    if (timeoutTestRef.current) {
      clearTimeout(timeoutTestRef.current);
    }
  };

  useEffect(() => {
    resetTestTimeout();
    timeoutTestRef.current = setTimeout(
      () =>
        setTestIndex((prevIndex) =>
          prevIndex === Testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {
      resetTestTimeout();
    };
  }, [testIndex]);

  const nextTestHandler = () => {
    return setTestIndex(
      testIndex < Testimonials.length - 1 ? testIndex + 1 : testIndex
    );
  };

  const prevTestHandler = () => {
    return setTestIndex(testIndex > 0 ? testIndex - 1 : testIndex);
  };

  return (
    <section className="container-testimonial">
      <div className="container-testimonial-title">
        <h4>OUR CUSTOMERS COMMENTS</h4>
      </div>
      <div
        className="testimonial-slide-btn testimonial-slide-btn-left"
        onClick={prevTestHandler}
      ></div>
      <div
        className="testimonial-slide-btn testimonial-slide-btn-right"
        onClick={nextTestHandler}
      ></div>
      <div className="testimonial-slide-viewbox">
        <div
          className="container-testimonial-slides"
          style={{
            transform: `translate3d(${
              -testIndex * (100 / Testimonials.length)
            }%, 0, 0)`,
            width: `${Testimonials.length * 100}%`,
          }}
        >
          {Testimonials.map((testimonial) => {
            return (
              <div className="testimonial-slide" key={testimonial.id}>
                <div className="container-testimonial-slide-text">
                  <p>&#8220;{testimonial.quote}&#8221;</p>
                  <h5>{testimonial.name}</h5>
                  <p>{testimonial.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
