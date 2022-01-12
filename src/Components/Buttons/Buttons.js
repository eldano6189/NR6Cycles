import React from "react";
import "./Buttons.css";

export function Button({ children }) {
  return <button className="container-button">{children}</button>;
}

export function Link({ children, href }) {
  return (
    <a href={href} className="container-button">
      {children}
    </a>
  );
}
