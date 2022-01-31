import "./TextSection.css";

export default function TextSection({ product }) {
  return (
    <section className="container-prod-text">
      <h3>Why choose the {product.name} wheelset?</h3>
      <p>{product.briefDesc}</p>
    </section>
  );
}
