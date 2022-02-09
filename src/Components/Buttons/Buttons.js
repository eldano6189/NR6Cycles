import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

export function Button({ children, type }) {
  return (
    <button type={type} className="container-button">
      {children}
    </button>
  );
}

export function ExtLink({ children, href }) {
  return (
    <a
      href={href}
      className="container-button"
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export function IntLink({ children, href, props }) {
  return (
    <Link to={href} state={props} className="container-button">
      {children}
    </Link>
  );
}

export function Anchor({ children, href }) {
  return (
    <a href={href} className="container-button">
      {children}
    </a>
  );
}
