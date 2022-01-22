import React from "react";
import "./ProgressBar.css";

export default function ProgressBar({ rev, total }) {
  return (
    <ul className="container-progress">
      <li className={rev >= 1 ? "progress-box progress" : "progress-box"}></li>
      <li className={rev >= 2 ? "progress-box progress" : "progress-box"}></li>
      <li className={rev >= 3 ? "progress-box progress" : "progress-box"}></li>
      <li className={rev >= 4 ? "progress-box progress" : "progress-box"}></li>
      <li className={rev >= 5 ? "progress-box progress" : "progress-box"}></li>
      <li>({total})</li>
    </ul>
  );
}
