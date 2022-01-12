import React from "react";
import "./MediaSection.css";
import { Instagram } from "../../../Data/Posts/Instagram";

export default function MediaSection() {
  return (
    <section className="container-media">
      <div className="container-media-text">
        <h3>@NR6CYCLES</h3>
        <p>Follow us on Instagram to see what we're up to</p>
      </div>
      <div className="container-media-wrapper">
        <ul className="container-media-links">
          {Instagram.filter((inst) => inst.id > Instagram.length - 4).map(
            (filteredInst) => {
              return (
                <li key={filteredInst.id}>
                  <a href={filteredInst.link} target="_blank" rel="noreferrer">
                    <img
                      className="media-img"
                      src={require(`../../../Assets/Images/Media/${filteredInst.img}`)}
                      alt="Instagram"
                    />
                    <div className="media-text">
                      <p>{filteredInst.text}</p>
                      <p>{filteredInst.date}</p>
                    </div>
                  </a>
                </li>
              );
            }
          )}
        </ul>
        <ul className="container-media-links">
          {Instagram.filter(
            (inst) =>
              inst.id < Instagram.length - 3 && inst.id > Instagram.length - 8
          ).map((filteredInst) => {
            return (
              <li key={filteredInst.id}>
                <a href={filteredInst.link} target="_blank" rel="noreferrer">
                  <img
                    className="media-img"
                    src={require(`../../../Assets/Images/Media/${filteredInst.img}`)}
                    alt="Instagram"
                  />
                  <div className="media-text">
                    <p>{filteredInst.text}</p>
                    <p>{filteredInst.date}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
