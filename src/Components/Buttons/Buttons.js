import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

export function Button({ children }) {
  return <button className="container-button">{children}</button>;
}

export function ExtLink({ children, href }) {
  return (
    <a href={href} className="container-button">
      {children}
    </a>
  );
}

export function IntLink({ children, href }) {
  return (
    <Link to={href} className="container-button">
      {children}
    </Link>
  );
}
