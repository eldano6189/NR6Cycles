import "./InfoSection.css";

export default function InfoSection({ product }) {
  return (
    <section className="container-product-info-section" id="Test">
      <h4>KEY FEATURES</h4>
      {product.type !== "Frame" ? (
        <ul>
          <li>
            <h5>Rims:</h5>
            <p>{product.features[0].rims}</p>
          </li>
          <li>
            <h5>Bearings:</h5>
            <p>{product.features[0].bearings}</p>
          </li>
          <li>
            <h5>Hubs:</h5>
            <p>{product.features[0].hubs}</p>
          </li>
          <li>
            <h5>Spokes:</h5>
            <p>{product.features[0].spokes}</p>
          </li>
          <li>
            <h5>Included:</h5>
            <p>{product.features[0].included}</p>
          </li>
          <li>
            <h5>Extras:</h5>
            <p>{product.features[0].extras}</p>
          </li>
        </ul>
      ) : (
        <ul>
          {product.features.map((feature) => {
            return <li key={Math.random()}>{feature}</li>;
          })}
        </ul>
      )}
    </section>
  );
}
