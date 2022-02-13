import "./TextSection.css";

export default function TextSection({ product }) {
  return (
    <section className="container-prod-text">
      <h3>Why choose {product.name}?</h3>
      <p>{product.briefDesc}</p>
    </section>
  );
}
