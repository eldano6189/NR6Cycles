import "./ProductPage.css";
import HeroSection from "./Hero-Section/HeroSection";
import TextSection from "./Text-Section/TextSection";
import InfoSection from "./Info-Section/InfoSection";

export default function Product({ product }) {
  return (
    <div className="container-product">
      <HeroSection product={product} />
      <TextSection product={product} />
      <InfoSection product={product} />
    </div>
  );
}
