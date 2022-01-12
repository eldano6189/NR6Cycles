import React from "react";
import HeroSection from "./Hero-Section/HeroSection";
import MediaSection from "./Media-Section/MediaSection";
import ProductSection from "./Product-Section/ProductSection";
import TestimonialSection from "./Testimonial-Section/TestimonialSection";

export default function LandingPage() {
  return (
    <div className="container-landing">
      <HeroSection />
      <ProductSection />
      <MediaSection />
      <TestimonialSection />
    </div>
  );
}
